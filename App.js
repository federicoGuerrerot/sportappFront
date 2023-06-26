import React from "react";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/components/AppNav";

// import { NavigationContainer } from "@react-navigation/native";
// import AuthStack from "./src/components/AuthStack";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}