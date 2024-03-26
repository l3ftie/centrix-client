import React from "react";
import { Text, View } from "react-native";

const PlanCard = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default PlanCard;
