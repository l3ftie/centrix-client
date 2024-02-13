import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../context/appContext";
import styles from "./alertModal.styles";

const AlertModal = () => {
  const { alertType, alertText } = useAppContext();

  console.log(alertText, alertType);

  return (
    <View style={styles.alertWrapper(alertType)}>
      <View style={styles.infoBox}>
        <Ionicons name="alert-circle-outline" />
        <Text>{alertText}</Text>
      </View>
    </View>
  );
};

export default AlertModal;
