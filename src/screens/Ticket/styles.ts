import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: theme.vw * 0.05,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: theme.colors.gray700,
    fontSize: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.purple900,
    fontSize: 30,
  },
  descriptionContainer: {
    height: 200,
    width: "98%",
    marginTop: 5,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,

    backgroundColor: theme.colors.white100,
    borderRadius: 8,

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
