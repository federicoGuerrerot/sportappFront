// import React, {useContext} from "react";
import React from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./src/components/AuthStack";
import AppStack from "./src/components/AppStack";
import { AuthContext } from "./src/context/AuthContext";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  // const {user} = useContext(AuthContext);
  return (
    // <AuthProvider>
    <NavigationContainer>
      {/* {user !== null ? <AppStack /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  // </AuthProvider>
  );
}
