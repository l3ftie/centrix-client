import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../../context/appContext";
import getGreetingTextTime from "../../../utils/greetings";
import styles from "./header.styles";

const HeaderBar = ({ noText }) => {
  const { user } = useAppContext();

  const { firstName, lastName } = user;

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.upperHeader}>
        <View style={styles.headerAvatar}>
          <Text style={styles.headerText}>
            {firstName?.slice(0, 1)}
            {lastName?.slice(0, 1)}
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/*  */}
      <View>
        {noText ? (
          <></>
        ) : (
          <Text style={styles.greetingText}>
            {getGreetingTextTime()} {firstName}
          </Text>
        )}
      </View>
    </View>
  );
};

export default HeaderBar;
