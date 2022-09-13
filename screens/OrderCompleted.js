import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { db } from "../firebase";
import MenuItems from "../componets/restaurantDetail/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna",
        description: "with butter lettuce , tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://media.istockphoto.com/photos/lasagna-on-a-square-white-plate-picture-id535851351?k=20&m=535851351&s=612x612&w=0&h=jdWOk9G_OOzHvPrvFrigqzk3EoucmIhUZr1-ey9NcGM=",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/./animations/check-mark.json")}
        speed={0.5}
        autoPlay
        loop={false}
      />
      <View style={{ margin: 20, alignItems: "center", height: "100%" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>

        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/./animations/cooking.json")}
            speed={0.5}
            autoPlay
            loop={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
