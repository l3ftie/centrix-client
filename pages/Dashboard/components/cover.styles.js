import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/theme";

const styles = StyleSheet.create({
  header: {
    fontSize: SIZES.large,
    fontFamily: "bold",
    color: COLORS.gray,
  },
  separator: {
    height: 0.5,
    backgroundColor: COLORS.gray,
    marginVertical: SIZES.medium,
  },
  accountContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  outerContainer: {
    backgroundColor: COLORS.offwhite,
    height: SIZES.medium,
    marginTop: SIZES.small,
    borderRadius: SIZES.medium,
    position: "relative",
  },
  btnCover: {
    backgroundColor: COLORS.secondaryDark,
    flex: 1,
    alignItems: "center",
    padding: SIZES.large,
    borderRadius: SIZES.small,
  },
});

export default styles;
