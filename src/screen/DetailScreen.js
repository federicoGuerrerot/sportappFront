import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// dto places
// id' =>$this->id,
// 'nombre' => $this->nombre,
// 'direccion' => $this->direccion,
// 'telefono' => $this->telefono,

const DetalleScreen = ({navigation, route}) => {
    const place = route.params.place

    return (
        <View style={ styles.mainView }>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>ID:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.id }</Text>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Nombre:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.nombre }</Text>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Direccion:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.direccion }</Text>
            <Text style={ {color: 'red', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Telefono:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ place.telefono }</Text>

            {/* <MapView style={ styles.map }>
                <Marker
                    key={ place.id }
                    coordinate={ {latitude: place.location.coordinates[1], longitude: place.location.coordinates[0]} }
                    title={ book.nombre }
                    description={ place.direccion }
                />
            </MapView> */}
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

export default DetalleScreen;