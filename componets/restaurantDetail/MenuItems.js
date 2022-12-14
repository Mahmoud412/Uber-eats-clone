import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import MenuItemsStyle from "../../styles/MenuItemsStyle";

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={MenuItemsStyle.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "#d3d3d3" }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}

            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={MenuItemsStyle.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
