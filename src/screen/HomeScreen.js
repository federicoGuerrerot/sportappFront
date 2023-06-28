import React, {useContext, useState} from 'react';
import { Button, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import FloatNav from '../components/FloatNav';

// import MapView from 'react-native-maps';

const HomeScreen = ({navigation}) => {
    const { user } = useContext(AuthContext);
    const [mostrar, setMostrar] = useState(false);
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={ styles.mainView }>
                {/* MAPA AQUI */}
                
                <View style={styles.floatNavContainer}>
                    {/* Condicional para saber que navegacion usar */}
                    {user !== null ? 
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
                        setMostrar(!mostrar)
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
    }
});

export default HomeScreen;