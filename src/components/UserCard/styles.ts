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
  },
});
