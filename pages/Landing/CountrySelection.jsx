import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../context/appContext";
import { countryInfo } from "../../utils/info";
import styles from "./countrySelection.styles";

const CountrySelection = ({ navigation }) => {
  const { selectedCountry } = useAppContext();

  const handleSelection = (details) => {
    selectedCountry(details);

    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select the country you’re in</Text>
      </View>
      <View style={styles.selectorContainer}>
        {countryInfo.map((details) => {
          return (
            <TouchableOpacity
              key={details.id}
              style={styles.btnContainer}
              onPress={() => handleSelection(details)}
            >
              <Image source={details.flagpath} style={{ width: 34, height: 34 }} />
              <Text style={styles.countryName}>{details.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CountrySelection;
