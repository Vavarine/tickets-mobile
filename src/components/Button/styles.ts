import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  default: {
    height: 50,
    width: theme.vw * 0.9,
    backgroundColor: theme.colors.purple900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cancel: {
    height: 50,
    width: theme.vw * 0.8,
    backgroundColor: theme.colors.red500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  submit: {
    height: 50,
    width: theme.vw * 0.8,
    backgroundColor: "#96BC8A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  text: {
    color: theme.colors.white,
    fontSize: 20,
  },
  icon: {
    marginLeft: 16,
  },
});
