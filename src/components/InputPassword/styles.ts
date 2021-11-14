import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
  },
  input: {
    height: 50,
    width: globalStyles.vw * 0.8,
    paddingLeft: 15,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: globalStyles.colors.gray500,
    color: globalStyles.colors.gray500,
    fontSize: 18,
    backgroundColor: globalStyles.colors.white,
  },
  icon: {
    position: "absolute",
    top: 66,
    right: 16,
    transform: [{ translateY: -50 }],
  },
});
