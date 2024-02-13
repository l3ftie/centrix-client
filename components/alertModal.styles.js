import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../assets/theme";

const styles = StyleSheet.create({
  alertWrapper: (alertType) => ({
    position: "absolute",
    top: SIZES.xLarge + 10,
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    height: 110,
    width: "100%",
    borderRadius: SIZES.medium,
    shadow: SHADOWS.medium,
    borderWidth: 2,
    borderColor: `${alertType === "danger" ? COLORS.danger : COLORS.success}`,
    shadowColor: `${alertType === "danger" ? COLORS.danger : COLORS.success}`,
  }),
  infoBox: {
    flexDirection: "row",
  },
});

export default styles;
