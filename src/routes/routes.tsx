import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LogIn } from "../screens/LogIn";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator>
      <Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Screen name="SignIn" component={SignIn} options={{ title: "Cadastrar-se" }} />
    </Navigator>
  );
}
