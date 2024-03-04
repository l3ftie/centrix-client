import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "./compoents/HeaderBar";

const Home = () => {
  return (
    <SafeAreaView>
      <HeaderBar />
    </SafeAreaView>
  );
};

export default Home;
