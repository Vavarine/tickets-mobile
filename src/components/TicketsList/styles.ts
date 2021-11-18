import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    // height: 238,
    marginBottom: 10,
    width: theme.vw * 0.9,
  },

  title: {
    marginBottom: 4,
    marginLeft: 10,
    fontFamily: theme.fonts.title400,
    color: theme.colors.purple900,
    fontSize: 18,
  },

  list: {
    height: 192,
    marginBottom: 18,
  },
});
