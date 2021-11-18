import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 180,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 12,
    width: theme.vw * 0.6,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: "#eeeeef",
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
    color: theme.colors.gray700,
    fontSize: 22,
    fontFamily: theme.fonts.title400,
  },

  id: {
    position: "absolute",
    bottom: 12,
    fontSize: 14,
    left: 10,
    color: theme.colors.gray500,
    fontFamily: theme.fonts.text400,
  },

  arrow: {
    position: "absolute",
    bottom: 8,
    right: 10,
    color: theme.colors.purple900,
  },
});
