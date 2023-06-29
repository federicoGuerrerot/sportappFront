import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import DetailSpaceScreen from "../screen/DetailSpaceScreen";


const Stack = createStackNavigator();

export default function AuthStack() {
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
                      title: 'SportApp',
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
                <Stack.Screen
            name="DetailSpace"
            component={ DetailSpaceScreen }
            options={ {
                title: 'Detalleslugar',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                }
            } }
        />
      </Stack.Navigator>
  );
}
