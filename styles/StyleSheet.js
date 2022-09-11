import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 280,
    flex: 1,
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 40,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    left: 10,
  },
  textname: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textmin: {
    fontSize: 15,
    color: "gray",
  },
  rating: {
    backgroundColor: "#eee",
    height: 40,
    width: 40,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    right: 20,
    marginBottom: 10,
  },
});
