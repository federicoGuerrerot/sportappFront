import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [carga, setCarga] = useState(false);
    const [user, setUser] = useState(null);
    const [userinfo, setUserinfo] = useState(null);

    const login = async (email, password) => {
        setCarga(true);
        try {
            const response = await fetch('http://192.168.0.104:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }).then(response => response.json())
            .then(json => {
                setUser(json.access_token);
                setUserinfo(json.data);
                AsyncStorage.setItem('user', json.access_token);
                AsyncStorage.setItem('userinfo', JSON.stringify(json.data));
            });
            // const json = await response.json();
            // setUser(json.access_token);
            // setUserinfo(json.data);
            // AsyncStorage.setItem('user', user);
            // AsyncStorage.setItem('userinfo', JSON.stringify(userinfo));
        } catch (error) {
            console.log(error);
            setUser(null);
        }
        setCarga(false);
    }

    const register = async (nombre, email, telefono, password) => {
        setCarga(true);
        try {
            const response = await fetch('http://192.168.0.104:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: nombre,
                    email: email,
                    telefono: telefono,
                    password: password,
                }),
            }).then(response => response.json())
            .then(json => {
                setUser(json.access_token);
                setUserinfo(json.data);
                AsyncStorage.setItem('user', json.access_token);
                AsyncStorage.setItem('userinfo', JSON.stringify(json.data));
            });
        } catch (error) {
            console.log(error);
            setUser(null);
        }
        setCarga(false);
    }

    const logout = async () => {
        setCarga(true);
        try {
            const response = await fetch('http://192.168.0.104:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${await AsyncStorage.getItem('user')}`,
                },
            });
            const json = await response.json();
            console.log(json.message);
        } catch (error) {
            console.log(error);
        }
        setUser(null);
        setUserinfo(null);
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('userinfo');
        setCarga(false);
    }

    const isLogged = async() => {
        try{
            setCarga(true);
            let user = await AsyncStorage.getItem('user');
            let userinfo = await AsyncStorage.getItem('userinfo');
            setUser(user);
            setUserinfo(JSON.parse(userinfo));
            setCarga(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        isLogged();
    }, []);

    return (
        <AuthContext.Provider value = {{ user, userinfo, carga, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


// login mal
// message: unautenticado
// login bien
// {
//     "data": {
//         "id": 1,
//         "name": "Mi vagabundassasasas danilo",
//         "email": "danilovag3@gmail.com",
//         "email_verified_at": null,
//         "created_at": "2023-06-26T00:16:40.000000Z",
//         "updated_at": "2023-06-26T00:16:40.000000Z"
//     },
//     "access_token": "13|sQqJw2DSnTS3PiC0YEmSjlQHXti54rSc5omU5syq"
// }
// logout
// {
//     "message": "Logged out"
// }