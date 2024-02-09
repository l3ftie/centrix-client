import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./formInput.styles";

const FormInput = ({ labelText, name, value, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.labelText}>{labelText || name}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default FormInput;
