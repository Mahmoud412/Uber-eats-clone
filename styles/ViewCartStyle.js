import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  checkoutText: {
    position: "absolute",
    right: 20,
    color: "white",
    top: 15,
    fontSize: 15,
  },
  viewCartText: {
    color: "white",
    fontSize: 20,
    marginRight: 40,
  },
  totalUsd: {
    color: "white",
    fontSize: 20,
  },
  loadingIcon: {
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
