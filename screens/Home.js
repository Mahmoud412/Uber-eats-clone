import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../componets/home/HeaderTabs";
import SearchBar from "../componets/home/SearchBar";
import Categories from "../componets/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../componets/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../componets/home/BottomTabs";

const YELP_API_KEY =
  "OTSAaTeIvVnQGHaD-f94B51SCwFt40HYfNYjqApXnKXnSyZggvEHcY3E-NTRMC0cMmddlQ5p0eDq5ggpjp7zGcGsl4VjWMHpa-KEeb-ReazgsMnzDig8ComP9_4cY3Yx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, SetCity] = useState("LosAngeles");
  const [activeTab, setActiveTab] = useState("Delivery"); //lefting the state up inside of react

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
      params: {
        term: "restaurants",
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((businesses) =>
            businesses.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityhandler={SetCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
