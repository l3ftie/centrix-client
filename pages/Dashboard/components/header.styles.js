import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/theme";

const styles = StyleSheet.create({
  headerText: {
    textTransform: "uppercase",
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontWeight: "800",
  },
  headerAvatar: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 100,
  },
  upperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.large,
  },
  greetingText: {
    textTransform: "capitalize",
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
});

export default styles;
