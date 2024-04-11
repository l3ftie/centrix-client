import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#202871",
  secondary: "#ece70f",
  secondaryDark: "#FFC629",
  primaryDark: "#121950",
  gray: "#9CA0AF",
  lightPrimary: "#ddeefa",
  primaryBlue: "#01377d",
  danger: "#ff4545",
  success: "#4FBF26",
  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  lightWhite: "#FAFAFC",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SHADOWS, SIZES };
