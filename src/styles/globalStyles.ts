import React, { StyleSheet } from "react-native";

const { Dimensions } = React;

export const globalStyles = {
  vw: Dimensions.get("window").width,
  vh: Dimensions.get("window").height,
  colors: {
    background: "#eee",
    white: "#eee",
    purple900: "#392F5A",
    red500: "#c5283d",
    green500: "#1AAE9F",
    gray400: "#B8C4CF",
    gray500: "#788896",
    gray700: "#6b8496",
  },
};
