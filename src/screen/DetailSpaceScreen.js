import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// dto places
// id' =>$this->id,
// 'nombre' => $this->nombre,
// 'direccion' => $this->direccion,
// 'telefono' => $this->telefono,

const DetalleSpaceScreen = ({navigation, route}) => {
    const place = route.params.place

    return (
        <View style={ styles.mainView }>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>ID:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.place_id }</Text>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Nombre:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.name }</Text>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Direccion:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.vicinity }</Text>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Calificacion:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.rating }</Text>
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
        height: '40%',
    },
});

export default DetalleSpaceScreen;