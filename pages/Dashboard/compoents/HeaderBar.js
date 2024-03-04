import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../../../context/appContext";

const HeaderBar = () => {
  const { user } = useAppContext();

  const { firstName, lastName } = user;
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <View>
          <Text>
            {firstName} {lastName?.slice(0, 1)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
