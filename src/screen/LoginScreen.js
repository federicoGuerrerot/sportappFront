import React, {useContext, useState} from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';    

import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {login} = useContext(AuthContext);
    
    return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
            <View style = {{alignItems: 'center', paddingHorizontal: 25}}>
                <View style = {styles.contInput}>
                    <MaterialIcons name = "email" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Email"
                        KeyboardType = "email-address"
                        value={email}
                        onChangeText = {(text) => setEmail(text)}
                    />
                </View>
                <View style = {styles.contInput}>
                    <Ionicons name = "ios-lock-closed-outline" size = {24} color = "black" style = {{marginRight: 5}}/>
                    <TextInput style = {styles.input}
                        placeholder = "Contraseña"
                        secureTextEntry = {true}
                        value={password}
                        onChangeText = {(text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity 
                    onPress={() => {login(email, password)}}
                    style = {styles.btnLogin}>
                    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 18}}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 16}}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
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

export default LoginScreen;