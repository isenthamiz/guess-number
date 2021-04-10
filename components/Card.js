import React from "react";
import { View, StyleSheet } from "react-native";

const Card = function (props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 3,
    elevation: 5, //Shadow Property for Android Mobile
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
