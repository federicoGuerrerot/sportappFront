import React, {useContext, useState} from 'react';
import { SafeAreaView, View, ScrollView, Text, TextInput } from 'react-native';

import { AuthContext } from "../context/AuthContext";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';    
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegisterScreen = ({navigation}) => {
    
    const [nombre, setNombre] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [password, setPassword] = useState(null);
    const {register} = useContext(AuthContext);

    return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
            <ScrollView ShowVerticalScrollIndicator={false} style = {{paddingHorizontal: 25}}>
                <View style = {styles.contInput}>
                    <MaterialIcons name = "chevron-right" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Nombre"
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
                        placeholder = "Telefono"
                        KeyboardType = "phone-pad"
                        value={telefono}
                        onChangeText = {text => setTelefono(text)}
                    />
                </View>
                <View style = {styles.contInput}>
                    <Ionicons name = "ios-lock-closed-outline" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Contraseña"
                        secureTextEntry = {true}
                        value={password}
                        onChangeText = {text => setPassword(text)}
                    />
                </View>
                <TouchableOpacity 
                    onPress={() => {register(nombre, email, telefono, password)}}
                    style = {styles.btnLogin}>
                    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 18}}>Crear cuenta</Text>
                </TouchableOpacity>
                <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 16}}>¿Ya estas registrado?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>Inicia Sesión</Text>
                    </TouchableOpacity>
                </View>
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