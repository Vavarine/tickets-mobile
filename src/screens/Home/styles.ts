import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: globalStyles.vh * 0.15,
    marginBottom: globalStyles.vh * 0.1,
    fontSize: 42,
    color: globalStyles.colors.purple500,
    fontWeight: "bold",
  },
  inputsContainer: {
    // marginTop: globalStyles.vh * 0.1,
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
