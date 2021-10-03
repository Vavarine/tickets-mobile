import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  default: {
    height: 50,
    width: globalStyles.vw * 0.8,
    backgroundColor: globalStyles.colors.purple500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  cancel: {
    height: 50,
    width: globalStyles.vw * 0.8,
    backgroundColor: globalStyles.colors.red500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  submit: {
    height: 50,
    width: globalStyles.vw * 0.8,
    backgroundColor: globalStyles.colors.green500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  text: {
    color: globalStyles.colors.white,
    fontSize: 20,
  },
  icon: {
    marginRight: 16,
  },
});
