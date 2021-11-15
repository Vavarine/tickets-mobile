import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: theme.vh * 0.15,
    marginBottom: theme.vh * 0.1,
    fontSize: 42,
    color: theme.colors.purple900,
    fontWeight: "bold",
  },
  inputsContainer: {
    // marginTop: theme.vh * 0.1,
  },
  inputContainer: {
    position: "relative",
  },
  buttonsContainer: {
    marginTop: "auto",
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
  },
});
