import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.fonts.text400,
  },
  title: {
    marginTop: theme.vh * 0.15,
    marginBottom: theme.vh * 0.1,
    fontSize: 42,
    color: theme.colors.purple900,
    fontFamily: theme.fonts.title700,
  },
  inputsContainer: {
    // marginTop: theme.vh * 0.1,
  },
  inputContainer: {
    position: "relative",
  },
  buttonsContainer: {
    marginTop: "auto",
    marginBottom: 30,
    display: "flex",
    flexDirection: "column",
  },
  signIn: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    fontSize: 16,
    color: theme.colors.gray500,
    textDecorationLine: "underline",
  },
});
