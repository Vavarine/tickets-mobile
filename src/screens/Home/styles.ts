import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 20,
    paddingBottom: 20,
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
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  listsContainer: {
    paddingTop: 10,
    margin: 20,
    paddingLeft: theme.vw * 0.05,
    paddingRight: theme.vw * 0.05,
    flex: 1,
    width: theme.vw,
  },
});
