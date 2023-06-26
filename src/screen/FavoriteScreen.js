import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const FavoriteScreen = ({navigation, route}) => {
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        getPlaces();
    }, []);

    const getPlaces = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/places');
            const json = await response.json();
            setPlaces(json.data);
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
                                    source={ {uri: place.url} }/>
                        <Card.Content>
                            <Text style={ {paddingTop: 20, fontWeight: 'bold', fontSize: 18, color: 'black'} }>
                                { place.name }
                            </Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button buttonColor={ 'orange' } textColor={ 'white' } style={ {borderColor: 'orange'} }
                                    onPress={ () => {
                                        navigation.navigate("Detail", {book: place, name: place.name})
                                    } }>
                                Ver detalle
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