import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }>
        <Stack.Screen
                  name="Home"
                  component={ HomeScreen }
                  options={ {
                      title: 'Inicio',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                          fontSize: 20
                      }
                  } }
              />
        <Stack.Screen
            name="Login"
            component={ LoginScreen }
            options={ {
                title: 'Log In',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                }
            } }
        />
        <Stack.Screen
            name="Register"
            component={ RegisterScreen }
            options={ {
                title: 'Registrate',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                }
            } }
        />
      </Stack.Navigator>
  );
}
