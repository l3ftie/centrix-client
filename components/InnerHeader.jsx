import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../assets/theme";
import styles from "./innerHeader.styles";

const InnerHeader = ({ title, goBackEnable }) => {
  const navigate = useNavigation();
  const statusBarHight = StatusBar.currentHeight;
  return (
    <View style={{ paddingTop: statusBarHight }}>
      <View style={styles.container}>
        {!goBackEnable && (
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Feather name="chevron-left" size={32} color={COLORS.gray} />
          </TouchableOpacity>
        )}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </View>
  );
};

export default InnerHeader;
