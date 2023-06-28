import React, { useContext } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { AuthContext } from "../context/AuthContext";

const FloatNav = ({navigation,icon,destino,estilo}) => {
    const { logout } = useContext(AuthContext);
    return (
        <TouchableOpacity
        style={ {estilo} } 
        onPress={ () => {
            {destino == 'logout' ? logout() : navigation.navigate(destino)}
        }}
        >
        <Image
            style={ styles.imgmenu }
            source={ {uri: icon} }
        />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10,
    },
    bttnlogin: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 80,
        padding: 10,
    },
    bttnfav: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 80,
    },
    bttnprof: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 135,
    },
    bttnlogout: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 190,
    },
    imgmenu: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }
});

export default FloatNav;