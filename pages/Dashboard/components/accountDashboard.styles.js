import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/theme";

const styles = StyleSheet.create({
  infoWrapper: {
    marginVertical: SIZES.medium + 10,
  },
  heroImage: {
    height: SIZES.height / 5,
    borderRadius: 10,
    overflow: "hidden",
    padding: SIZES.medium,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  actionContainer: {
    paddingHorizontal: SIZES.small,
    width: "100%",
    alignSelf: "center",
    marginTop: -SIZES.xLarge - 10,
  },
  innerAction: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    height: 100,
    alignItems: "center",
  },
  actionBtn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnIcon: {
    backgroundColor: COLORS.lightPrimary,
    padding: SIZES.medium,
    borderRadius: SIZES.xLarge + 20,
  },
  btnSeparatorLast: { borderRightWidth: 0 },
  btnSeparator: { borderRightWidth: 0.5, borderRightColor: COLORS.primaryDark },
});

export default styles;
