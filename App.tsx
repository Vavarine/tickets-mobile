import React from "react";
import { StatusBar } from "react-native";
import { LogBox } from "react-native";

import { Routes } from "./src/routes";

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
