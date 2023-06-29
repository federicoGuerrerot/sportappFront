import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

import { useSelector } from 'react-redux';


import { ActivityIndicator, View } from "react-native";

function AppNav() {
  const {user, carga} = useSelector((state) => state.auth);
    if (carga) {
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
        <NavigationContainer>
          {user !== '' ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
  }
  
export default AppNav;