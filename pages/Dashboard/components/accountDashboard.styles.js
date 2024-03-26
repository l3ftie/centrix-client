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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default styles;
