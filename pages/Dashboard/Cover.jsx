import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";

const Cover = () => {
  return (
    <SafeAreaView style={{ padding: SIZES.medium }}>
      <Text>Cover</Text>
    </SafeAreaView>
  );
};

export default Cover;
