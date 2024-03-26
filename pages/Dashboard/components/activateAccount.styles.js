import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/theme";

const styles = StyleSheet.create({
  activateContainer: {
    backgroundColor: COLORS.primaryDark,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.large,
  },
  btn: {
    backgroundColor: COLORS.secondaryDark,
    borderRadius: SIZES.medium,
    padding: SIZES.small,
  },
  btnText: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
