import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Profile from "../componets/Account/Profile";

const Account = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Profile navigation={navigation} />
    </SafeAreaView>
  );
};

export default Account;
