import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/theme";

const styles = StyleSheet.create({
  //   cardWrapper: { flexDirection: "row" },
  actionBtn: {
    padding: SIZES.small,
  },
  labelText: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: SIZES.large,
    textAlign: "center",
  },
  actionText: {
    color: COLORS.secondaryDark,
  },
});

export default styles;
