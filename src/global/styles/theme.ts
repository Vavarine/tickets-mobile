import React, { StyleSheet } from "react-native";

const { Dimensions } = React;

export const theme = {
  vw: Dimensions.get("window").width,
  vh: Dimensions.get("window").height,
  colors: {
    background: "#eee",
    white: "#eee",
    white100: "#eeeeef",
    purple900: "#392F5A",
    red500: "#c5283d",
    green500: "#1AAE9F",
    gray400: "#B8C4CF",
    gray500: "#788896",
    gray700: "#6b8496",
  },
  fonts: {
    title400: "RobotoSlab_400Regular",
    title700: "RobotoSlab_700Bold",
    text400: "Roboto_400Regular",
    text700: "Roboto_700Bold",
  },
};
