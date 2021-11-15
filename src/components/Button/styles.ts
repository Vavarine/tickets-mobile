import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  default: {
    height: 50,
    width: theme.vw * 0.8,
    backgroundColor: theme.colors.gray700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 12,
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
    backgroundColor: theme.colors.green500,
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
    marginRight: 16,
  },
});
