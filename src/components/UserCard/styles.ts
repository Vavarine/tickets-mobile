import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: theme.vw * 0.8,
    borderRadius: 8,
    borderColor: theme.colors.gray500,
    fontSize: 18,
    backgroundColor: theme.colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
