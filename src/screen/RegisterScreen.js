import React from 'react';
import { SafeAreaView, View, ScrollView, Text, TextInput } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';    

const RegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
            <ScrollView ShowVerticalScrollIndicator={false} style = {{alignItems: 'center', paddingHorizontal: 25}}>
                <view style = {styles.contInput}>
                    <MaterialIcons name = "email" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Email"
                        KeyboardType = "email-address"
                    />
                </view>
                <view style = {styles.contInput}>
                    <Ionicons name = "ios-lock-closed-outline" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Contraseña"
                        secureTextEntry = {true}
                    />
                </view>
                <TouchableOpacity 
                    onPress={() => {}}
                    style = {styles.btnLogin}>
                    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 18}}>Crear cuenta</Text>
                </TouchableOpacity>
                <view style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 16}}>¿Ya estas registrado?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>Inicia Sesión</Text>
                    </TouchableOpacity>
                </view>
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

export default RegisterScreen;