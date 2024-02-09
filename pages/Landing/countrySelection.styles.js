import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: SIZES.xxLarge + 50,
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: "semibold",
    color: COLORS.primary,
  },
  selectorContainer: {
    backgroundColor: COLORS.white,
    marginTop: SIZES.xLarge,
    marginHorizontal: SIZES.small + 20,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    gap: 10,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1 / 2,
    paddingVertical: SIZES.medium,
  },
  countryName: {
    fontFamily: "semibold",
    textTransform: "capitalize",
    fontSize: SIZES.medium,
  },
});

export default styles;
