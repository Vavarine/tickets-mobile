import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { LogBox } from "react-native";
import AuthContextProvider from "./src/contexts/AuthContext";

import { Routes } from "./src/routes";

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </NavigationContainer>
  );
}
