import React, { useEffect, useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { aAction } from "../redux/Store";

// dto places
// id' =>$this->id,
// 'nombre' => $this->nombre,
// 'direccion' => $this->direccion,
// 'telefono' => $this->telefono,

const FavoriteScreen = ({navigation, route}) => {
    
    const { user, userinfo, places, carga } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const userid = userinfo.id;

    useEffect(() => {
        if ( places.length == 0 ) {
            console.log(places);
            getPlaces();
        }
             else {
            dispatch(aAction.setCarga(false));
            console.log("lugares cargados");
        }
    }, []);

    const getPlaces = async () => {
        try {
            dispatch(aAction.setCarga(true));
            const response = await fetch(`http://192.168.0.104:8000/api/users/${userid}/favorites`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${user}`,
                }
            }).then(response => response.json())
            .then(json => {
                dispatch(aAction.setPlaces(json.data));
            });
            dispatch(aAction.setCarga(false));
        } catch (error) {
            console.error(error);
            dispatch(aAction.setCarga(false));
        }
        dispatch(aAction.setCarga(false));
    };

    return (
        <ScrollView>
            { places.map((place, key) => {
                return (
                    <Card style={ {marginHorizontal: 10, marginTop: 10} } key={ key }>
                        <Card.Cover theme={ {roundness: 4, isV3: false} }
                                    source={ {uri: 'https://cdn-icons-png.flaticon.com/512/7369/7369110.png'} }/>
                        <Card.Content>
                            <Text style={ {paddingTop: 20, fontWeight: 'bold', fontSize: 18, color: 'black'} }>
                                { place.nombre }
                            </Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button buttonColor={ 'red' } textColor={ 'white' } style={ {borderColor: 'red'} }
                                    onPress={ () => {
                                        navigation.navigate("Detail", {place: place, name: place.nombre})
                                    } }>
                                Ver detalle
                            </Button>
                        </Card.Actions>
                        <Card.Actions>
                            <Button buttonColor={ 'red' } textColor={ 'white' } style={ {borderColor: 'red'} }>
                                Fav
                            </Button>
                        </Card.Actions>
                    </Card>
                );
            })}

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default FavoriteScreen;