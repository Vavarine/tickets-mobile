import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LogIn } from "../screens/LogIn";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { EditUser } from "../screens/EditUser";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Screen name="SignIn" component={SignIn} options={{ title: "" }} />
      <Screen name="Home" component={Home} options={{ title: "" }} />
      <Screen name="EditUser" component={EditUser} options={{ title: "" }} />
    </Navigator>
  );
}
