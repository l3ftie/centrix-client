import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: SIZES.small,
  },
  progressWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
    height: SIZES.medium,
    flex: 1,
  },
  progressMeter: (progress) => ({
    height: "100%",
    width: `${progress}%`,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
  }),
});

export default styles;
