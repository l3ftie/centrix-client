import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import image from "../../assets/images/image.png";
import { COLORS } from "../../assets/theme";
import styles from "./landing.styles";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={image} style={styles.bgImage}>
        <LinearGradient
          colors={["#00000000", COLORS.primary]}
          style={{ height: "100%", width: "100%" }}
        ></LinearGradient>
      </ImageBackground>

      <View style={styles.lowerSection}>
        <Text style={styles.infoText}>
          Living the dream is a state of mind. Get funeral assurance, that fits
          with you.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("CountrySelection")}
        >
          <Text style={styles.btnText}>Get Started...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
