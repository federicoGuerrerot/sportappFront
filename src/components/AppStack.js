import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import ProfileScreen from "../screen/ProfileScreen";
import DetailScreen from "../screen/DetailScreen";

const Stack = createStackNavigator();

export default function AppStack() {
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
            name="Favoritos"
            component={ FavoriteScreen }
            options={ {
                title: 'Favoritos',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                }
            } }
        />
        <Stack.Screen
            name="Profile"
            component={ ProfileScreen }
            options={ {
                title: 'Perfil',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                }
            } }
        />
        <Stack.Screen
            name="Detail"
            component={ DetailScreen }
            options={ {
                title: 'Detalles',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                }
            } }
        />
      </Stack.Navigator>
  );
}
