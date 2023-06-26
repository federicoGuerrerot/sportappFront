import React, {useContext, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

import { AuthContext } from "../context/AuthContext";

function AppNav() {
    const { user } = useContext(AuthContext);
    return (
        <NavigationContainer>
          {user !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
  }
  
export default AppNav;