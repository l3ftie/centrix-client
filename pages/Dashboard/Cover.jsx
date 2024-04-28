import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import ContentLoader, { Circle, Code, Rect } from "react-content-loader/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import coverImg from "../../assets/images/insurance.png";
import { COLORS, SIZES } from "../../assets/theme";
import { useAppContext } from "../../context/appContext";
import { coversList } from "../../utils/info";
import styles from "./components/cover.styles";

const Cover = () => {
  const { user, getCoverDesc, isLoading } = useAppContext();
  const navigation = useNavigation();

  const { balance, planType, planState, verificationState, phone, _id } = user;

  // will be filtered remove late
  const filteredCovers = coversList.filter((cover) => {
    return cover.name === planType;
  });

  let coverDetails = filteredCovers && filteredCovers[0];

  useEffect(() => {
    // getCoverDesc(planType)
  }, []);
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
                USD: {balance}
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
                USD: {coverDetails.price}
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
        <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={styles.btnCover}>
          <Text style={{ fontFamily: "semibold" }}>Make Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCover}>
          <Text style={{ fontFamily: "semibold" }}>Update Cover</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.header, { textTransform: "capitalize" }]}>{planType} Plan</Text>
      <Text style={{ fontFamily: "semibold" }}>
        Your Cover is currently {planState ? "Active" : "Inactive"}
      </Text>
      <Text style={{ fontFamily: "semibold" }}>
        {" "}
        {planState ? "" : "Please make a payment to activate your cover"}
      </Text>
      {/* description of cover */}
      {isLoading || !coverDetails ? (
        <ContentLoader speed={1} backgroundColor="#d1d1d1" foregroundColor="#ecebeb">
          <Rect x="2" y="10" rx="0" ry="0" width="460" height="21" />
          <Rect x="3" y="40" rx="0" ry="0" width="460" height="21" />
          <Rect x="4" y="70" rx="0" ry="0" width="460" height="21" />
          <Rect x="5" y="100" rx="0" ry="0" width="460" height="50" />
        </ContentLoader>
      ) : (
        <View style={{ marginVertical: 12 }}>
          <Text style={{ fontFamily: "semibold" }}>
            Dependency Allowance: {coverDetails.relationShip ? "Yes" : "No"}
          </Text>
          <Text style={{ fontFamily: "semibold" }}>Description: {coverDetails.description}</Text>
          <Text style={{ fontFamily: "semibold" }}>
            Transport Allowance: {coverDetails.busBenefit}
          </Text>
          <Text style={{ fontFamily: "semibold" }}>Casket Type: {coverDetails.casketType}</Text>
          <Text style={{ fontFamily: "semibold" }}>Total Price: {coverDetails.price}</Text>
        </View>
      )}
      {/* description of cover */}
    </SafeAreaView>
  );
};

export default Cover;
