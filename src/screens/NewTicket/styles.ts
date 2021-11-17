import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  titleInputWrapper: {
    marginTop: 25,
    marginBottom: 30,
  },
  titleInput: {
    width: theme.vw * 0.9,
    borderColor: theme.colors.purple900,
  },
  descriptionContainer: {
    // height: "70%",
    flex: 1,
    marginBottom: 60,
  },
  descriptionTitle: {
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: theme.fonts.text400,
    color: theme.colors.purple900,
  },
  descriptionInputwrapper: {},
  descriptionInput: {
    height: "100%",
    textAlignVertical: "top",
    justifyContent: "flex-start",
    paddingTop: 10,
    width: theme.vw * 0.9,
    borderColor: theme.colors.purple900,
  },
});
