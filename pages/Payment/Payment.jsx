import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { COLORS, SIZES } from "../../assets/theme";
import { InnerHeader } from "../../components";

const options = [
  {
    id: 1,
    title: "Moonlight Biller Code",
    value: "biller",
  },
  {
    id: 2,
    title: "Moonlight Banking Details",
    value: "bank",
  },
  {
    id: 3,
    title: "Pay with Ecocash USD",
    value: "ecocash",
  },
  {
    id: 4,
    title: "Pay with Innbucks",
    value: "innbucks",
  },
];

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelected = (value) => {
    setSelectedOption(value);
  };

  return (
    <ScrollView style={{ padding: SIZES.medium }}>
      <View style={{ marginBottom: SIZES.xLarge }}>
        <InnerHeader title="Payment" />
      </View>

      <View style={{ marginVertical: SIZES.xLarge }}>
        <Text style={{ color: COLORS.primaryBlue, fontSize: SIZES.medium + 3 }}>
          Please select a payment option below and enter amount.
        </Text>
      </View>

      <View style={{ marginVertical: SIZES.xLarge, gap: SIZES.medium }}>
        {options.map((option) => (
          <TouchableOpacity
            onPress={() => handleSelected(option.value)}
            style={{
              flexDirection: "row",
              backgroundColor: COLORS.lightWhite,
              padding: SIZES.medium,
              justifyContent: "space-between",
              borderRadius: SIZES.medium,
              paddingHorizontal: SIZES.xSmall,
              paddingVertical: SIZES.medium,
            }}
          >
            <Text style={{ fontFamily: "bold", color: COLORS.primaryBlue }}>{option.title}</Text>
            <View
              style={{
                height: SIZES.xLarge,
                width: SIZES.xLarge,
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: SIZES.medium,
                  width: SIZES.medium,
                  borderRadius: 100,
                  backgroundColor:
                    selectedOption === option.value ? COLORS.primaryBlue : COLORS.offwhite,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ marginVertical: SIZES.xLarge }}>
        <Text style={{ color: COLORS.primaryDark, fontFamily: "bold" }}>
          How much would you like to pay?
        </Text>
        <View>
          <TextInput
            value={amount}
            keyboardType="numeric"
            placeholderTextColor={COLORS.primaryBlue}
            style={{
              fontSize: SIZES.xLarge,
              fontFamily: "semibold",
              borderBottomWidth: 1,
              paddingVertical: SIZES.medium,
              borderColor: COLORS.primaryBlue,
            }}
            onChangeText={setAmount}
            placeholder=" Amount USD"
            onChange={setAmount}
          />
        </View>
      </View>
      <TouchableOpacity
        disabled={!selectedOption && !amount}
        style={{
          alignItems: "center",
          padding: SIZES.large,
          borderRadius: SIZES.xSmall,
          backgroundColor: !selectedOption && !amount ? COLORS.gray : COLORS.secondaryDark,
        }}
      >
        <Text style={{ color: COLORS.primary, fontFamily: "bold" }}>Make Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Payment;
