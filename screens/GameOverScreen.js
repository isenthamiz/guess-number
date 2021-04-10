import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = function (props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of Rounds: {props.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOverScreen;
