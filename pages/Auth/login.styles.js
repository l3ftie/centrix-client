import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/theme";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: SIZES.large,
    marginTop: SIZES.xxLarge,
  },
  container: {
    flex: 1,
    height: SIZES.height,
    position: "relative",
  },
  loginContainer: {
    marginHorizontal: SIZES.medium,
    justifyContent: "space-between",
    height: SIZES.height,
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
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
