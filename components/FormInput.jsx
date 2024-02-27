import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./formInput.styles";

const FormInput = ({
  labelText,
  name,
  value,
  onChangeText,
  addedStyles,
  keyboardType,
  secureText,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={addedStyles ? styles.labelText2 : styles.labelText}>{labelText || name}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default FormInput;
