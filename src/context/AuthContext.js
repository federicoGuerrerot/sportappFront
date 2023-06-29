import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { aAction } from "../redux/Store";


const useAuth = () => {
    const dispatch = useDispatch();
    const {user, userinfo, carga} = useSelector((state) => state.auth);

    const login = async (email, password) => {    
        dispatch(aAction.setCarga(true));
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
                dispatch(aAction.setUser(json.access_token));
                dispatch(aAction.setUserInfo(json.data));
            });
        } catch (error) {
            console.log(error);
            dispatch(aAction.setUser(null));
        }
        dispatch(aAction.setCarga(false));
    }

    const register = async (nombre, email, telefono, password) => {
        dispatch(aAction.setCarga(true));
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
                dispatch(aAction.setUser(json.access_token));
                dispatch(aAction.setUserInfo(json.data));
            });
        } catch (error) {
            console.log(error);
            dispatch(aAction.setUser(null));
        }
        dispatch(aAction.setCarga(false));
    }

    const logout = async () => {
        dispatch(aAction.setCarga(true));
        try {
            const response = await fetch('http://192.168.0.104:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${user}`,
                },
            });
            const json = await response.json();
            console.log(json.message);
        } catch (error) {
            console.log(error);
        }
        dispatch(aAction.setUser(''));
        dispatch(aAction.setUserInfo(''));
        dispatch(aAction.setCarga(false));
        dispatch(aAction.setPlaces([]));
    }

    return {login, register, logout};
}
export default useAuth;