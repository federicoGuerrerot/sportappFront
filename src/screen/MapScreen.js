import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = ({navigation, route}) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getLocation();
    }
    , []);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
        }
        else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
    }

    return (
        <View style={ styles.mainView }>
            <MapView style={ styles.map }>
                { location && <Marker
                    key={ 1 }
                    coordinate={ {latitude: location.coords.latitude, longitude: location.coords.longitude} }   
                    title={ 'Ubicación actual' }
                    description={ 'Ubicación actual' }
                /> }
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen;