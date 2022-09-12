import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);
  return (
    <View style={styles.Container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 320,
    position: "relative",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  Container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 840,
    zIndex: 999,
  },
});
