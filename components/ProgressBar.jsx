import React from "react";
import { Text, View } from "react-native";
import styles from "./progressBar.styles";

const ProgressBar = ({ totalSteps, steps }) => {
  const percentage = (steps / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressWrapper}>
        <View style={styles.progressMeter(percentage)}></View>
      </View>
      <View>
        <Text>{`${steps}/${totalSteps}`}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
