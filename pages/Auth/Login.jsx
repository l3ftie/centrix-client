import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/android/drawable-xxxhdpi/logo.png";
import { COLORS, SIZES } from "../../assets/theme";
import styles from "./login.styles";

const options = [
  {
    id: 1,
    name: "south africa",
    tag: "za",
    flagpath: require("../../assets/images/south-africa.png"),
  },
  {
    id: 2,
    name: "united kingdom",
    tag: "uk",
    flagpath: require("../../assets/images/united-kingdom.png"),
  },
  {
    id: 3,
    name: "zimbabwe",
    tag: "zw",
    flagpath: require("../../assets/images/zimbabwe.png"),
  },
];

const Login = ({ navigation }) => {
  const [country, setCountry] = useState("zw");
  const [displayCountry, setDisplayCountry] = useState("");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const processCountry = (selectedCountry) => {
    const tag = options.find((option) => option.tag === selectedCountry);
    setDisplayCountry(tag);
  };

  useEffect(() => {
    processCountry(country);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Mobile Number</Text>
            <View style={styles.inputWrapper}>
              <Image
                source={displayCountry.flagpath}
                style={{ width: 30, height: 30 }}
              />
              <TextInput
                value={phone}
                style={styles.textInput}
                onChangeText={setPhone}
                placeholder="eg. 0785404096"
              />
            </View>

            <Text style={styles.labelText}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                value={phone}
                style={styles.textInput}
                onChangeText={setPhone}
                placeholder="Enter Password"
              />
            </View>
            {/* btn section */}
          </View>
          <View>
            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.btnText}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFingerprint}>
                <Ionicons
                  name="finger-print-outline"
                  size={24}
                  color={COLORS.offwhite}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={{ fontFamily: "bold", fontSize: SIZES.medium }}>
                Forgot Pin?
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text style={{ color: COLORS.gray, fontSize: SIZES.medium }}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ color: COLORS.primary, fontSize: SIZES.medium }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <Text>v.1.0.0, Moonlight, All rights reserved </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
