import React, {useContext, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";

function AppNav() {
    const { carga, user } = useContext(AuthContext);

    if (carga) {
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
        <NavigationContainer>
          {user !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
  }
  
export default AppNav;