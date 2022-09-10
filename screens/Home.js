import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../componets/HeaderTabs";
import SearchBar from "../componets/SearchBar";
import Categories from "../componets/Categories";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
