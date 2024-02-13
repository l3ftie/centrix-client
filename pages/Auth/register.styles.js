import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/theme";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: SIZES.large,
  },
  container: {
    marginTop: SIZES.xxLarge,
    flex: 1,
    position: "relative",
  },
  registerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.xLarge,
    gap: SIZES.xLarge,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.medium,
  },
  headerTexts: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  progressWrapper: {
    marginVertical: SIZES.medium,
  },
  formWrapper: {
    flex: 1,
    paddingBottom: SIZES.small,
  },
  form: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    flex: 1,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.large,
  },
  formSubmitBtn: {
    backgroundColor: COLORS.primary,
    marginTop: SIZES.medium,
    borderRadius: SIZES.medium,
    paddingVertical: SIZES.medium,
    alignItems: "center",
  },
  submitText: {
    color: COLORS.offwhite,
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
});

export default styles;
