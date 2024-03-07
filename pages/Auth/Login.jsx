import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/android/drawable-xxxhdpi/logo.png";
import { COLORS, SIZES } from "../../assets/theme";
import { AlertModal } from "../../components";
import { useAppContext } from "../../context/appContext";
import { countryInfo } from "../../utils/info";
import styles from "./login.styles";

const Login = ({ navigation }) => {
  const { country, loginClient, displayAlert, isLoading, showAlert } = useAppContext();

  const [countryCode, setCountryCode] = useState(country);

  const [displayCountry, setDisplayCountry] = useState("");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const processCountry = (selectedCountry) => {
    const tag = countryInfo.find((option) => option.iso === selectedCountry);
    setDisplayCountry(tag);
  };

  const handleLogin = () => {
    if (!phone || !password) {
      displayAlert();
    }
    const data = { phone: displayCountry.code + phone, password };
    loginClient(data);
  };

  useEffect(() => {
    processCountry(countryCode);
  }, []);

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled style={styles.container}>
        <View style={styles.loginContainer}>
          <Image source={logo} style={styles.logo} />
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Mobile Number</Text>
              <View style={[styles.inputWrapper, { alignItems: "center" }]}>
                <Image source={displayCountry.flagpath} style={{ width: 30, height: 30 }} />
                <Text style={{ fontSize: SIZES.large, fontFamily: "semibold" }}>
                  {displayCountry.code}
                </Text>
                <TextInput
                  value={phone}
                  style={[styles.textInput, { fontSize: SIZES.large, fontFamily: "semibold" }]}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>

              <Text style={styles.labelText}>Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={password}
                  style={[styles.textInput, { fontSize: SIZES.large, fontFamily: "semibold" }]}
                  onChangeText={setPassword}
                  placeholder="Enter Password"
                  secureTextEntry
                />
              </View>
              {/* btn section */}
            </View>
            <View>
              <View style={styles.btnWrapper}>
                <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
                  <Text style={styles.btnText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFingerprint}>
                  <Ionicons name="finger-print-outline" size={24} color={COLORS.offwhite} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ fontFamily: "bold", fontSize: SIZES.medium }}>Forgot Pin?</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingBottom: SIZES.large + 3, alignSelf: "center" }}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Text style={{ color: COLORS.gray, fontSize: SIZES.medium }}>
                Don't have an account yet?
              </Text>
              <TouchableOpacity
                style={{ marginLeft: 5 }}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={{ color: COLORS.primary, fontSize: SIZES.medium }}>Register</Text>
              </TouchableOpacity>
            </View>
            <Text>v.1.0.0, Moonlight, All rights reserved </Text>
          </View>
        </View>
        {showAlert && <AlertModal />}
      </ScrollView>
    </View>
  );
};

export default Login;
