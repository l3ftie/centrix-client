import React from "react";
import { FlatList, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

import moment from "moment";
import heroImage from "../../../assets/images/family-together.jpg";
import { COLORS, SIZES } from "../../../assets/theme";
import { useAppContext } from "../../../context/appContext";
import getGreetingTextTime from "../../../utils/greetings";
import { actions, recentActivities } from "../../../utils/info";
import AccountCardDetails from "./AccountCardDetails";
import HeaderBar from "./HeaderBar";
import styles from "./accountDashboard.styles";

const AccountDashboard = () => {
  const { user } = useAppContext();

  const { firstName } = user;
  return (
    <View style={{ height: SIZES.height, paddingBottom: SIZES.xLarge + 50 }}>
      <HeaderBar noText={true} />
      <ImageBackground style={styles.heroImage} source={heroImage}>
        <View style={styles.overlay}></View>
        <Text
          style={{
            fontSize: SIZES.xLarge + 10,
            color: COLORS.lightWhite,
            fontWeight: "700",
          }}
        >
          {getGreetingTextTime()}
        </Text>
        <Text
          style={{
            fontSize: SIZES.xLarge + 10,
            color: COLORS.lightWhite,
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {firstName}
        </Text>
      </ImageBackground>
      <View style={styles.actionContainer}>
        <View style={styles.innerAction}>
          <FlatList
            data={actions}
            numColumns={4}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.actionBtn,
                    index === actions.length - 1 ? styles.btnSeparatorLast : styles.btnSeparator,
                  ]}
                  key={item.id}
                >
                  {item.icon}
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      {/* details account*/}
      <View
        style={{
          padding: SIZES.small,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.small,
          marginVertical: SIZES.medium,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: SIZES.xSmall - 5,
          }}
        >
          <Text style={{ color: COLORS.offwhite, fontWeight: "600" }}>Policy Number:</Text>
          <Text style={{ color: COLORS.offwhite, fontWeight: "600" }}>MON{user._id.slice(-6)}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: SIZES.xSmall - 5,
          }}
        >
          <Text style={{ color: COLORS.offwhite, fontWeight: "600" }}>Renewal Date:</Text>
          <Text style={{ color: COLORS.offwhite, fontWeight: "600" }}>
            {user.planState ? moment(user.createdAt).add(1, "months").format("MM/DD/YYYY") : "----"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: SIZES.xSmall - 5,
          }}
        >
          <Text style={{ color: COLORS.offwhite, fontWeight: "600" }}>Policy Status:</Text>
          <Text style={{ color: COLORS.offwhite, fontWeight: "600" }}>
            {user.planState ? "Active" : "Inactive"}
          </Text>
        </View>
      </View>

      {/* recent payments account*/}

      <Text style={{ fontSize: SIZES.large, color: COLORS.gray, fontFamily: "bold" }}>
        Recent Activities
      </Text>
      {recentActivities.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={recentActivities}
          ListFooterComponent={() => <View style={{ height: SIZES.xSmall }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                {
                  borderRadius: 5,
                  borderLeftWidth: SIZES.xSmall - 6,
                  borderWidth: 1,
                  borderTopColor: "#d3d9dd",
                  borderRightColor: "#d3d9dd",
                  borderBottomColor: "#d3d9dd",
                  marginVertical: SIZES.xSmall - 5,
                  paddingVertical: SIZES.xSmall,
                  paddingHorizontal: SIZES.small,
                  borderLeftColor:
                    item.activityType === "payment" ? COLORS.success : COLORS.secondaryDark,
                },
              ]}
            >
              <Text style={{ fontFamily: "semibold", color: COLORS.primary }}>{item.title}</Text>
              <Text style={{ color: COLORS.primaryDark }}>
                <Text style={{ fontFamily: "semibold" }}>USD</Text> {item.amount}
              </Text>
              <Text style={{ fontFamily: "semibold", fontSize: SIZES.xSmall, color: COLORS.gray }}>
                {moment(item.time).fromNow()}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default AccountDashboard;
