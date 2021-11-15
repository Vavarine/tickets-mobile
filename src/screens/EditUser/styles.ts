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
    marginTop: theme.vh * 0.05,
    marginBottom: theme.vh * 0.08,
    fontSize: 42,
    color: theme.colors.purple900,
    fontWeight: "bold",
  },
  inputsContainer: {
    marginBottom: "auto",
  },
  inputContainer: {
    position: "relative",
  },

  input: {
    height: 50,
    width: theme.vw * 0.8,
    paddingLeft: 8,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.colors.gray500,
    fontSize: 18,
    backgroundColor: theme.colors.white,
  },
  icon: {
    position: "absolute",
    top: 66,
    right: 16,
    transform: [{ translateY: -50 }],
  },
  buttonsContainer: {
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
  },
});
