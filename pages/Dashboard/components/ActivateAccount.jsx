import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../../assets/theme";
import { useAppContext } from "../../../context/appContext";
import HeaderBar from "./HeaderBar";
import styles from "./activateAccount.styles";

const ActivateAccount = () => {
  const { user } = useAppContext();
  const { idVerification } = user;
  return (
    <View style={{ marginVertical: SIZES.medium }}>
      <HeaderBar />
      <View style={[styles.activateContainer, { marginTop: SIZES.large }]}>
        {!idVerification && (
          <Text style={{ color: COLORS.lightWhite }}>
            Your KYC details are being verified. It won’t take long, we will let you know once its
            you have been verified.
          </Text>
        )}
      </View>
      <View style={styles.activateContainer}>
        <Text style={{ color: COLORS.lightWhite }}>
          It seems your account is not active, please make a payment to activate your plan.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn} disabled={!idVerification}>
        <Text style={styles.btnText}>Make a payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivateAccount;
