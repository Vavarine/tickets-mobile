import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LogIn } from "../screens/LogIn";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { EditUser } from "../screens/EditUser";
import useAuth from "../hooks/useAuth";
import Header from "../components/header";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const { user } = useAuth();

  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerTitle: Header }} />
      <Screen name="EditUser" component={EditUser} options={{ title: "" }} />
    </Navigator>
  );
}
