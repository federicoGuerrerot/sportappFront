import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { aAction } from "../redux/Store";

import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import FloatNav from '../components/FloatNav';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {user, userinfo, mostrar} = useSelector((state) => state.auth);
    const [selectedSport, setSelectedSport] = useState('all');
    const [spaces, setSpaces] = useState([]);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const keyword = "estadio,gimnasio,cancha de tenis,cancha de baloncesto,cancha de fútbol";

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //           setError('Permiso de ubicación denegado');
    //           return;
    //         }
      
    //         let currentLocation = await Location.getCurrentPositionAsync({});
    //         setLocation(currentLocation.coords);
    //       })();
    // }, []);

    // useEffect(() => {
    //     if (location && spaces.length === 0) {
    //         fetchPlaces();
    //       }
    // }, [location]);

    // const fetchPlaces = async () => {
    //     try {
    //       const latitude = location.latitude; // Obtén la latitud de la ubicación del dispositivo
    //       const longitude = location.longitude; // Obtén la longitud de la ubicación del dispositivo
    //       const radius = 1000; // Radio de búsqueda en metros (ejemplo: 1000 metros)
    
    //       const types = ['stadium', 'gym', 'tennis_court', 'basketball_court', 'soccer_field'];
    //       const promises = types.map(type =>
    //         fetch(
    //           `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=gym&key=AIzaSyAzt_d5-FliAr5SwdPoJMIbctzLL2Arrmk`
    //         ).then(response => response.json())
    //       );
    //       const responses = await Promise.all(promises);
    //       const results = responses.flatMap(response => response.results);
    //       setSpaces(results);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    //   const handleSportChange = (value) => {
    //     setSelectedSport(value);
    //   };
    
    //   const filteredSpaces = selectedSport === 'all'
    //     ? spaces
    //     : spaces.filter(space => space.types.includes(selectedSport));
    
    //   if (error) {
    //     return <Text>{error}</Text>;
    // }

    return (
        <SafeAreaView style={styles.mainView}>
            <View style={ styles.mainView }>

                <DropDownPicker
                    items={[
                    { label: 'Todos los deportes', value: 'all' },
                    { label: 'Estadios', value: 'stadium' },
                    { label: 'Gimnasios', value: 'gym' },
                    { label: 'Canchas de tenis', value: 'tennis_court' },
                    { label: 'Canchas de baloncesto', value: 'basketball_court' },
                    { label: 'Canchas de fútbol', value: 'soccer_field' },
                    ]}
                    defaultValue={selectedSport}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                    itemStyle={styles.dropdownItem}
                    dropDownStyle={styles.dropdownMenu}
                    onChangeItem={item => handleSportChange(item.value)}
                />
                {/* MAPA AQUI */}
                
                {location && (
                    <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    >
                    {filteredSpaces.map(space => (
                        <Marker
                        key={space.place_id}
                        coordinate={{
                            latitude: space.geometry.location.lat,
                            longitude: space.geometry.location.lng,
                        }}
                        title={space.name}
                        description={space.vicinity}
                        />
                    ))}
                    </MapView>
                )}
                <View style={styles.floatNavContainer}>
                    {/* Condicional para saber que navegacion usar */}
                    {user !== '' ? 
                    <View>
                        {mostrar ? (
                        <>
                        <FloatNav navigation={navigation} icon='https://cdn-icons-png.flaticon.com/512/9270/9270837.png' destino='Favoritos' estilo={'styles.bttnfav'} />
                        <FloatNav navigation={navigation} icon='https://cdn-icons-png.flaticon.com/512/64/64572.png' destino='Profile' estilo={'styles.bttnprof'} />
                        <FloatNav navigation={navigation} icon='https://cdn-icons-png.flaticon.com/512/5528/5528144.png' destino='logout' estilo={'styles.bttnlogout'} />
                        </>) : null}
                    </View>
                    : // else
                    <View>
                        {mostrar ?
                        <FloatNav navigation={navigation} icon='https://cdn-icons-png.flaticon.com/512/64/64572.png' destino='Login' estilo={'styles.bttnlogin'} />
                        : null}
                    </View>}
                </View>

                <TouchableOpacity
                    style={ styles.bttnmenu } 
                    onPress={ () => {
                        dispatch(aAction.setMostrar());
                    }}
                >
                    <Image
                        style={ styles.imgmenu }
                        source={ {uri: 'https://cdn-icons-png.flaticon.com/512/11220/11220845.png'} }
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10,
    },
    bttnmenu: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 25,
    },
    imgmenu: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    floatNavContainer: {
        position: 'absolute',
        right: 25,
        bottom: 80,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    dropdownContainer: {
      width: 200,
      marginBottom: 20,
    },
    dropdown: {
      backgroundColor: "#fafafa",
    },
    dropdownItem: {
      justifyContent: "flex-start",
    },
    dropdownMenu: {
      marginTop: 8,
      backgroundColor: "#fafafa",
    },
});

export default HomeScreen;