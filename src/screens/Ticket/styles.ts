import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,

    width: "100%",
    paddingHorizontal: theme.vw * 0.05,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingVertical: 10,
    marginBottom: 6,
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
    marginBottom: 4,
    fontFamily: theme.fonts.title700,
    color: theme.colors.purple900,
    fontSize: 30,
  },
  description: {
    height: "26%",
    flexGrow: 0,
    marginBottom: 0,
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
  descriptionContainer: {
    // height: "100%",
    width: "98%",
    marginTop: 5,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  aproveButton: {
    paddingTop: 8,
    height: 50,
    width: theme.vw * 0.9,
    marginBottom: 20,
    marginTop: -12,
  },
});
