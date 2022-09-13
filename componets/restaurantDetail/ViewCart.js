import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

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

  const addOrderToFireBase = () => {
    // setLoading(true);
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{restaurantName}</Text>
              {items.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}

              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal</Text>
                <Text>{totalUSD}</Text>
              </View>

              <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={() => {
                  addOrderToFireBase();
                }}
              >
                <Text style={styles.textStyle}>CheckOut!</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    top: 15,
                    fontSize: 15,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {total ? (
        <View style={styles.Container}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.button}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 40 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "black",
    alignItems: "center",
    padding: 15,
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
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    margin: 5,
    borderRadius: 20,
    padding: 35,
    height: 550,
    backgroundColor: "white",
    borderWidth: 1,
    width: 400,
  },
  buttonModal: {
    borderRadius: 30,
    padding: 15,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
});
