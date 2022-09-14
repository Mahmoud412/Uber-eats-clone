import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import LoginForm from "../componets/Auth/LoginForm";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
}
