import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";

const More = () => {
  return (
    <SafeAreaView style={{ padding: SIZES.medium }}>
      <Text>More options</Text>
    </SafeAreaView>
  );
};

export default More;
