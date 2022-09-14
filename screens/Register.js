import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SignUp from "../componets/Auth/SignUp";

export default function Register({ navigation }) {
  return (
    <SafeAreaView>
      <SignUp navigation={navigation} />
    </SafeAreaView>
  );
}
