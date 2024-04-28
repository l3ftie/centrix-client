import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: "bold",
    color: COLORS.gray,
  },
});

export default styles;
