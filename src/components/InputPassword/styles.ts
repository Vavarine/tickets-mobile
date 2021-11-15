import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
  },
  input: {
    height: 50,
    width: theme.vw * 0.8,
    paddingLeft: 15,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: theme.colors.gray500,
    color: theme.colors.gray500,
    fontSize: 18,
    backgroundColor: theme.colors.white,
  },
  icon: {
    position: "absolute",
    top: 66,
    right: 16,
    transform: [{ translateY: -50 }],
  },
});
