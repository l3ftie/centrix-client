import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./countrySelection.styles";

const country = [
  {
    id: 1,
    name: "south africa",
    tag: "za",
    flagpath: require("../../assets/images/south-africa.png"),
  },
  {
    id: 2,
    name: "united kingdom",
    tag: "uk",
    flagpath: require("../../assets/images/united-kingdom.png"),
  },
  {
    id: 3,
    name: "zimbabwe",
    tag: "zw",
    flagpath: require("../../assets/images/zimbabwe.png"),
  },
];

const CountrySelection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select the country you’re in</Text>
      </View>
      <View style={styles.selectorContainer}>
        {country.map((details) => {
          return (
            <TouchableOpacity
              key={details.id}
              style={styles.btnContainer}
              onPress={() => navigation.navigate("Login")}
            >
              <Image
                source={details.flagpath}
                style={{ width: 34, height: 34 }}
              />
              <Text style={styles.countryName}>{details.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CountrySelection;
