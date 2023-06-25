import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./components/authStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />      
    </NavigationContainer>
  );
}
