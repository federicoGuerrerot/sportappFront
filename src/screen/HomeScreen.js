import React, {useContext} from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ({navigation}) => {
    const { user } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
    return (
        <View style={ styles.mainView }>
            <Image
                style={ {
                    width: 100,
                    height: 100,
                } }
                source={ {
                    uri: 'https://cdn-icons-png.flaticon.com/512/2784/2784389.png',
                } }
            />
            <Text style={ {color: 'orange', fontSize: 20, fontWeight: 'bold', margin: 10} }>
                Aqui va el MAPA
            </Text>
            {user !== null ? 
            <View>
            <Button
                title="Favoritos"
                onPress={ () => {
                    navigation.navigate("Favoritos")
                } }
            />
            <Button
                title="Perfil"
                onPress={ () => {
                    navigation.navigate("Profile")
                } }
            />
            <Button
                title="Logout"
                onPress={ () => {
                    {logout()}
                } } 
            />
            </View>
            : 
            <View>
            <Button
                title="Login"
                onPress={ () => {
                    navigation.navigate("Login")
                } }
            />
            <Button
                title="Register"
                onPress={ () => {
                    navigation.navigate("Register")
                } }
            />
            </View>}
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default HomeScreen;