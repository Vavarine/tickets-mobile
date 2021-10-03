import React, { StyleSheet } from "react-native";

const { Dimensions } = React;

export const globalStyles = {
  vw: Dimensions.get("window").width,
  vh: Dimensions.get("window").height,
  colors: {
    background: "#DFE6ED",
    white: "#fff",
    purple500: "#730FC3",
    red500: "#D3455B",
    green500: "#1AAE9F",
    gray400: "#B8C4CF",
    gray500: "#788896",
  },
};
