import React from "react";
import { ImageBackground, Text, View } from "react-native";

import heroImage from "../../../assets/images/family-together.jpg";
import { COLORS, SIZES } from "../../../assets/theme";
import { useAppContext } from "../../../context/appContext";
import getGreetingTextTime from "../../../utils/greetings";
import AccountCardDetails from "./AccountCardDetails";
import HeaderBar from "./HeaderBar";
import styles from "./accountDashboard.styles";

const AccountDashboard = () => {
  const { user } = useAppContext();
  const { firstName } = user;
  return (
    <View>
      <HeaderBar noText={true} />
      <ImageBackground style={styles.heroImage} source={heroImage}>
        <View style={styles.overlay}></View>
        <Text
          style={{
            fontSize: SIZES.xLarge + 10,
            color: COLORS.secondaryDark,
            fontWeight: "700",
          }}
        >
          {getGreetingTextTime()}
        </Text>
        <Text
          style={{
            fontSize: SIZES.xLarge + 10,
            color: COLORS.secondaryDark,
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {firstName}
        </Text>
      </ImageBackground>
      {/* promotions and rewards */}
      {/* promotions and rewards */}
      <View style={styles.infoWrapper}>
        <AccountCardDetails />
      </View>
    </View>
  );
};

export default AccountDashboard;
