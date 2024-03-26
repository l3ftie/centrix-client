import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { COLORS, SIZES } from "../assets/theme";
import Cover from "./Dashboard/Cover";
import Home from "./Dashboard/Home";
import More from "./Dashboard/More";

const Tab = createBottomTabNavigator();
const TabbedHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.secondaryDark,
        tabBarInactiveTintColor: COLORS.lightWhite,
        tabBarStyle: {
          paddingBottom: SIZES.small - 5,
          paddingTop: SIZES.xSmall,
          height: 55,
          backgroundColor: COLORS.primaryDark,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontWeight: "500" },
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
        }}
        name="Account"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: { fontWeight: "500" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
        }}
        name="My Cover"
        component={Cover}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: { fontWeight: "500" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
        name="More..."
        component={More}
      />
    </Tab.Navigator>
  );
};

export default TabbedHome;
