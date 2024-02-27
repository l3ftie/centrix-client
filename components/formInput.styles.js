import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/theme";

const styles = StyleSheet.create({
  wrapper: {},
  labelText: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    marginTop: SIZES.small,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  labelText2: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    marginTop: SIZES.small,
    color: COLORS.primary,
    textTransform: "capitalize",
    marginLeft: -SIZES.xLarge - 5,
  },
  inputWrapper: {
    gap: 3,
    borderBottomWidth: 1 / 2,
    marginBottom: SIZES.small,
    borderBottomColor: COLORS.gray,
    height: SIZES.xLarge + 10,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});

export default styles;
