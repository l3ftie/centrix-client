import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import coverImg from "../../assets/images/insurance.png";
import { COLORS, SIZES } from "../../assets/theme";
import styles from "./components/cover.styles";

const Cover = () => {
  return (
    <SafeAreaView style={{ padding: SIZES.medium }}>
      <Text style={styles.header}>My Cover Plan</Text>
      <View style={styles.separator} />
      <View style={styles.accountContainer}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: COLORS.offwhite, fontFamily: "semibold" }}>
                Current Balance
              </Text>
              <Text
                style={{
                  fontSize: SIZES.xLarge + 5,
                  fontFamily: "medium",
                  color: COLORS.offwhite,
                }}
              >
                USD: 143.00
              </Text>
            </View>
            <View>
              <Image
                source={coverImg}
                style={{ height: SIZES.xLarge + 30, width: SIZES.xLarge + 30 }}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View>
            <View>
              <Text style={{ color: COLORS.offwhite, fontFamily: "semibold" }}>Cover Total</Text>
              <Text
                style={{
                  fontSize: SIZES.xLarge + 5,
                  fontFamily: "medium",
                  color: COLORS.secondaryDark,
                }}
              >
                USD: 453.00
              </Text>
            </View>
            {/* slider cal */}
            <View>
              <Text
                style={{ color: COLORS.offwhite, marginTop: SIZES.medium, fontFamily: "semibold" }}
              >
                Cover Progress
              </Text>
              <View style={styles.outerContainer}>
                <View
                  style={{
                    width: "30%",
                    backgroundColor: COLORS.secondaryDark,
                    height: "100%",
                    borderRadius: SIZES.medium,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* more cover options */}
      <View style={{ flexDirection: "row", gap: SIZES.medium, marginVertical: SIZES.large }}>
        <TouchableOpacity style={styles.btnCover}>
          <Text style={{ fontFamily: "semibold" }}>Make Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCover}>
          <Text style={{ fontFamily: "semibold" }}>Update Cover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cover;
