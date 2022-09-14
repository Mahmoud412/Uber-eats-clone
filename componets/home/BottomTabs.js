import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ButtomTabsStyle from "../../styles/ButtomTabsStyle";

export default function BottomTabs({ navigation }) {
  return (
    <View style={ButtomTabsStyle.container}>
      <Icon icon="home" text="home" />
      <Icon icon="search" text="Browse" />

      <Icon icon="shopping-bag" text="Grocery" />

      <TouchableOpacity onPress={() => navigation.navigate("OrderCompleted")}>
        <Icon icon="receipt" text="Orders" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <Icon icon="user" text="Account" />
      </TouchableOpacity>
    </View>
  );
}

const Icon = (props) => (
  <View>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: "center",
      }}
    />
    <Text>{props.text}</Text>
  </View>
);
