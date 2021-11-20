import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: theme.vw * 0.9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    backgroundColor: theme.colors.white100,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: theme.colors.white100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: "auto",
    color: theme.colors.purple900,
    fontFamily: theme.fonts.text400,
  },
});
