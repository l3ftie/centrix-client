import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { COLORS, SIZES } from "../../assets/theme";
import { AlertModal, FormInput, ProgressBar } from "../../components";
import { useAppContext } from "../../context/appContext";
import { countryInfo } from "../../utils/info";
import styles from "./register.styles";

const Register = ({ navigation }) => {
  const { country } = useAppContext();

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
    confirmPassword: "",
  };

  const { showAlert, displayAlert, passwordMatching } = useAppContext();

  const [displayCountry, setDisplayCountry] = useState("");
  const [values, setValues] = useState(initialValues);
  const [countStep, setCountStep] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const processCountry = (selectedCountry) => {
    const tag = countryInfo.find((option) => option.iso === selectedCountry);
    setDisplayCountry(tag);
    setValues({ ...values, country: displayCountry.name });
  };

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

  const handleSubmit = () => {
    console.log(values);
    if (values.password !== values.confirmPassword) {
      passwordMatching();
    }

    if (!values.password || !values.confirmPassword) {
      displayAlert();
    }

    // process from data registration
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const updatedValues = {
      ...values,
      dob: moment(date).format("L"),
    };

    setValues(updatedValues);
    hideDatePicker();
  };

  useEffect(() => {
    processCountry(country);
  }, [displayCountry]);

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
                {/* date picker options */}
                <TouchableOpacity onPress={showDatePicker}>
                  <Text style={styles.labelText}>Date of Birth</Text>
                  <View style={styles.datePicker}>
                    <Text>{!values.dob ? "Please select a date" : values.dob.toString()}</Text>
                  </View>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </TouchableOpacity>
                {/* date picker options */}
              </>
            )}
            {countStep === 2 && (
              <>
                <View style={styles.withPhoneInput}>
                  <View style={styles.displayPhone}>
                    <Text
                      style={{
                        fontFamily: "semibold",
                        fontSize: SIZES.large,
                        paddingBottom: SIZES.xSmall - 3,
                      }}
                    >
                      {displayCountry.code}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <FormInput
                      addedStyles
                      name="phone"
                      keyboardType="number-pad"
                      value={values.phone}
                      onChangeText={(text) => handleChange("phone", text)}
                    />
                  </View>
                </View>
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
                <FormInput labelText="country" name="country" value={displayCountry.name} />
              </>
            )}
            {countStep === 3 && (
              <>
                <FormInput
                  name="password"
                  secureText
                  value={values.password}
                  onChangeText={(text) => handleChange("password", text)}
                />

                <FormInput
                  name="confirmPassword"
                  secureText
                  value={values.confirmPassword}
                  onChangeText={(text) => handleChange("confirmPassword", text)}
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
