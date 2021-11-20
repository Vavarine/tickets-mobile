import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: theme.vw * 0.9,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: theme.vw * 0.025,
    paddingRight: theme.vw * 0.025,
  },
  seachContainer: {
    marginTop: 0,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
