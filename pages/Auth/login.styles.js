import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.xxLarge,
  },
  loginContainer: {
    alignItems: "center",
    marginHorizontal: SIZES.medium,
    justifyContent: "space-between",
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
  },
  wrapper: {
    width: "100%",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    width: "100%",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  inputWrapper: {
    flexDirection: "row",
    gap: 3,
    borderBottomWidth: 1 / 2,
    paddingBottom: SIZES.small,
  },
  labelText: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    marginVertical: SIZES.small,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  textInput: {
    flex: 1,
  },
  btnWrapper: {
    marginVertical: SIZES.large,
    flexDirection: "row",
    gap: SIZES.small,
    height: SIZES.xxLarge + 5,
  },
  btnLogin: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1,
  },
  btnText: {
    color: COLORS.offwhite,
    fontFamily: "bold",
    textTransform: "uppercase",
  },
  btnFingerprint: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.medium,
  },
});

export default styles;
