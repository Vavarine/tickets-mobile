import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "auto",
  },
  input: {
    height: 50,
    width: theme.vw * 0.9 - 60,
    marginRight: 10,
    paddingLeft: 15,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: theme.colors.gray700,
    color: theme.colors.gray700,
    fontSize: 18,
    backgroundColor: theme.colors.white,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 8,
    backgroundColor: theme.colors.purple900,
  },
});
