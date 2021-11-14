import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { AuthRoutes } from "./auth.routes";
import { PublicRoutes } from "./routes";
import useAuth from "../hooks/useAuth";

export function Routes() {
  const { isLoading, signedIn } = useAuth();

  if (isLoading) {
    return <AppLoading />;
  }

  return signedIn ? <AuthRoutes /> : <PublicRoutes />;
}
