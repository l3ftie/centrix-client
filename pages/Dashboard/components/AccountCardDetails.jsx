import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../../context/appContext";
import styles from "./accountCardDetails.stype";

const AccountCardDetails = () => {
  const { user } = useAppContext();
  const { balance } = user;
  return <View style={styles.cardWrapper}></View>;
};

export default AccountCardDetails;

{
  /* <View style={{ flex: 1 }}>
        <Text>Current Balance:</Text>
        <Text style={styles.labelText}>USD {Number(balance)?.toFixed(2)}</Text>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Add Balance</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Current Plan</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Beneficiaries</Text>
      </View> */
}
