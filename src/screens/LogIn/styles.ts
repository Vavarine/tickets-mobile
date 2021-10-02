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
    marginTop: globalStyles.vh * 0.2,
    marginBottom: globalStyles.vh * 0.1,
    fontSize: 42,
    color: globalStyles.colors.purple500,
    fontWeight: "bold",
  },
  inputsContainer: {
    marginBottom: "auto",
  },
  inputContainer: {
    position: "relative",
  },
  inputContainerPassword: {
    marginTop: 20,
  },
  input: {
    height: 50,
    width: globalStyles.vw * 0.8,
    paddingLeft: 8,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: globalStyles.colors.gray500,
    fontSize: 18,
    backgroundColor: globalStyles.colors.white,
  },
  icon: {
    position: "absolute",
    top: 66,
    right: 16,
    transform: [{ translateY: -50 }],
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
