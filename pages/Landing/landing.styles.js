import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.offwhite,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: SIZES.width,
  },
  background: {
    height: "100%",
    width: "100%",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    width: SIZES.width,
  },
  lowerSection: {
    height: SIZES.height / 4,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.small,
  },
  infoText: {
    fontFamily: "medium",
    color: COLORS.offwhite,
    fontSize: SIZES.xLarge,
    textAlign: "center",
  },
  btn: {
    backgroundColor: COLORS.secondary,
    marginTop: SIZES.xLarge,
    paddingVertical: SIZES.large,
    borderRadius: 500,
    alignItems: "center",
    width: SIZES.width / 2,
  },
  btnText: {
    fontSize: SIZES.medium,
    textTransform: "uppercase",
    fontFamily: "bold",
    fontWeight: "500",
    color: COLORS.primaryDark,
  },
});

export default styles;
