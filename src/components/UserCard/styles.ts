import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: globalStyles.vw * 0.8,
    borderRadius: 8,
    borderColor: globalStyles.colors.gray500,
    fontSize: 18,
    backgroundColor: globalStyles.colors.white,
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
