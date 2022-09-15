import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { firebase, db } from "../../firebase";
import LottieView from "lottie-react-native";
import ViewCartStyle from "../../styles/ViewCartStyle";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const addOrderToFireBase = async () => {
    try {
      setLoading(true);
      const owner_uid = db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const email = db
        .collection("users")
        .doc(firebase.auth().currentUser.email);

      await db
        .collection("orders")
        .add({
          items: items,
          restaurantName: restaurantName,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          owner_uid: owner_uid,
          email: email,
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            navigation.navigate("OrderCompleted");
          }, 1000);
        });
    } catch (error) {}
  };
  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={ViewCartStyle.centeredView}>
            <View style={ViewCartStyle.modalView}>
              <Text style={ViewCartStyle.modalText}>{restaurantName}</Text>
              {items.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}

              <View style={ViewCartStyle.subtotalContainer}>
                <Text style={ViewCartStyle.subtotalText}>Subtotal</Text>
                <Text>{totalUSD}</Text>
              </View>

              <Pressable
                style={[ViewCartStyle.buttonModal, ViewCartStyle.buttonClose]}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={ViewCartStyle.textStyle}>CheckOut!</Text>
                <Text style={ViewCartStyle.checkoutText}>
                  {total ? totalUSD : ""}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {total ? (
        <View style={ViewCartStyle.Container}>
          <View style={ViewCartStyle.subContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={ViewCartStyle.button}
            >
              <Text style={ViewCartStyle.viewCartText}>View Cart</Text>
              <Text style={ViewCartStyle.totalUsd}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={ViewCartStyle.loadingIcon}>
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
