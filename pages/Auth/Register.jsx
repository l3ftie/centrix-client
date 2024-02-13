import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../assets/theme";
import { AlertModal, FormInput, ProgressBar } from "../../components";
import { useAppContext } from "../../context/appContext";
import styles from "./register.styles";

const Register = ({ navigation }) => {
  let totalSteps = 3;

  const initialValues = {
    firstName: "",
    lastName: "",
    idDetails: "",
    dob: "",
    idVerification: false,
    phone: "",
    address: "",
    state: "",
    country: "",
    applicationType: "new application",
    planType: "traditional",
    password: "",
  };

  const { showAlert, displayAlert } = useAppContext();

  const [values, setValues] = useState(initialValues);
  const [countStep, setCountStep] = useState(1);

  const processCount = () => {
    if (countStep === 1) return;
    setCountStep(countStep - 1);
  };

  const handleChange = (name, text) => {
    setValues({ ...values, [name]: text });
  };

  const handleProcess = () => {
    if (
      countStep === 1 &&
      (!values.firstName || !values.lastName || !values.idDetails || !values.dob)
    ) {
      displayAlert();
    } else if (
      countStep === 2 &&
      (!values.address || !values.state || !values.country || !values.phone)
    ) {
      console.log("something went wrong please fill in the form");
    } else {
      setCountStep(countStep + 1);
    }
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.wrapper}>
      <ScrollView scrollEnabled style={styles.container}>
        <View style={styles.registerHeader}>
          <TouchableOpacity
            onPress={() => {
              countStep === 1 ? navigation.goBack() : processCount();
            }}
          >
            <Ionicons name="chevron-back-circle" size={34} color={COLORS.primaryDark} />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Text style={styles.headerTexts} numberOfLines={1}>
              Let's setup your profile
            </Text>
          </View>
        </View>
        <View style={styles.progressWrapper}>
          <ProgressBar totalSteps={totalSteps} steps={countStep} />
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            {countStep === 1 && (
              <>
                <FormInput
                  labelText="Name"
                  name="firstName"
                  value={values.firstName}
                  onChangeText={(text) => handleChange("firstName", text)}
                />
                <FormInput
                  labelText="Surname"
                  name="lastName"
                  value={values.lastName}
                  onChangeText={(text) => handleChange("lastName", text)}
                />
                <FormInput
                  labelText="ID#"
                  name="idDetails"
                  value={values.idDetails}
                  onChangeText={(text) => handleChange("idDetails", text)}
                />
                <FormInput
                  labelText="date of Birth"
                  name="dob"
                  value={values.dob}
                  onChangeText={(text) => handleChange("dob", text)}
                />
              </>
            )}
            {countStep === 2 && (
              <>
                <FormInput
                  name="phone"
                  value={values.phone}
                  onChangeText={(text) => handleChange("phone", text)}
                />
                <FormInput
                  name="address"
                  value={values.address}
                  onChangeText={(text) => handleChange("address", text)}
                />
                <FormInput
                  name="state"
                  value={values.state}
                  onChangeText={(text) => handleChange("state", text)}
                />
                <FormInput
                  labelText="country"
                  name="country"
                  value={values.country}
                  onChangeText={(text) => handleChange("country", text)}
                />
              </>
            )}
          </View>
          {/*  */}
          <TouchableOpacity
            style={styles.formSubmitBtn}
            onPress={countStep === totalSteps ? handleSubmit : handleProcess}
          >
            <Text style={styles.submitText}>{countStep === totalSteps ? "Submit" : "Next"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showAlert && <AlertModal />}
    </View>
  );
};

export default Register;
