import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "red",;
  },
  list: {
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  messageContainer: {
    // backgroundColor: "red",
    marginBottom: 10,
  },
  messageSended: {
    maxWidth: "70%",
    marginLeft: "auto",
    marginBottom: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingBottom: 5,
    backgroundColor: theme.colors.gray300,
    borderRadius: 8,
    fontSize: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  messageRecived: {
    maxWidth: "70%",
    marginRight: "auto",
    marginBottom: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingBottom: 5,
    backgroundColor: theme.colors.white100,
    borderRadius: 8,
    fontSize: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  sender: {
    fontSize: 12,
    marginTop: 10,
    color: theme.colors.gray700,
  },
  date: {
    fontSize: 12,
    marginTop: 10,
    color: theme.colors.gray700,
  },
});
