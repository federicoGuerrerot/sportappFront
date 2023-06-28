import React, { useEffect, useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// dto places
// id' =>$this->id,
// 'nombre' => $this->nombre,
// 'direccion' => $this->direccion,
// 'telefono' => $this->telefono,

const FavoriteScreen = ({navigation, route}) => {
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        if ( AsyncStorage.getItem('places') != null) {
            getPlaces();
        } else {
            AsyncStorage.getItem('places').then((data) => {
                setPlaces(JSON.parse(data));
            }
            );
        }
    }, []);

    const getPlaces = async () => {
        try {
            const storedUserInfo = await AsyncStorage.getItem('userinfo');
            const parsedUserInfo = JSON.parse(storedUserInfo);
            const userid = parsedUserInfo.id;
            const response = await fetch(`http://localhost:8000/api/users/${userid}/favorites`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${await AsyncStorage.getItem('user')}`,
                }
            }).then(response => response.json())
            .then(json => {
                setPlaces(json.data);
                AsyncStorage.setItem('places', JSON.stringify(json.data));
            });
        } catch (error) {
            console.error(error);
        }
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