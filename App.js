import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return <AuthNavigation />;
}
