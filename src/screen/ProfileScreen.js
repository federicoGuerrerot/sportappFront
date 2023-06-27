import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { SafeAreaView, View, ScrollView, TextInput } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';    
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation, route}) => {

    const [userinfo, setUserInfo] = useState(null);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');   

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        try {
            const storedUserInfo = await AsyncStorage.getItem('userinfo');
            if (storedUserInfo) {
              const parsedUserInfo = JSON.parse(storedUserInfo);
              setUserInfo(parsedUserInfo);
              setNombre(parsedUserInfo.name);
              setEmail(parsedUserInfo.email);
              setTelefono(parsedUserInfo.telefono);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
            <ScrollView ShowVerticalScrollIndicator={false} style = {{paddingHorizontal: 25}}>
                <View style = {styles.contInput}>
                    <MaterialIcons name = "chevron-right" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = {nombre}
                        KeyboardType = "name"
                        value={nombre}
                        onChangeText = {text => setNombre(text)}
                    />
                </View>
                <View style = {styles.contInput}>
                    <MaterialIcons name = "email" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Email"
                        KeyboardType = "email-address"
                        value={email}
                        onChangeText = {text => setEmail(text)}
                    />
                </View>
                <View style = {styles.contInput}>
                    <MaterialIcons name = "phone" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = {telefono}
                        KeyboardType = "phone-pad"
                        value={telefono}
                        onChangeText = {text => setTelefono(text)}
                    />
                </View>
                <TouchableOpacity 
                    // onPress={() => {register(nombre, email, telefono, password)}}
                    onPress={() => {}}
                    style = {styles.btnLogin}>
                    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 18}}>Actualiza datos</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    contInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5
    },
    input: {
        width: '100%',
        height: 50,
        fontSize: 18
    },
    btnLogin: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    }
}

export default ProfileScreen;