import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import {
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";

import { AuthRoutes } from "./auth.routes";
import { PublicRoutes } from "./routes";
import useAuth from "../hooks/useAuth";

export function Routes() {
  const { isLoading, signedIn } = useAuth();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (isLoading || !fontsLoaded) {
    return <AppLoading />;
  }

  return signedIn ? <AuthRoutes /> : <PublicRoutes />;
}
