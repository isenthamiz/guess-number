import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const genRandBetween = function (min, max, exclude) {
  min = Math.floor(min);
  max = Math.ceil(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return genRandBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = function (props) {
  const [currentGuess, setCurrentGuess] = useState(
    genRandBetween(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess == userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const handleNextGuess = function (direction) {
    if (
      (direction == "LOWER" && currentGuess < props.userChoice) ||
      (direction == "HIGHER" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie", "You know that this is Wrong!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "LOWER") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNum = genRandBetween(
      currentLow.current,
      currentHigh.current,
      currentHigh
    );
    setCurrentGuess(nextNum);
    setRounds((currentRound) => currentRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={handleNextGuess.bind(this, "LOWER")} />
        <Button title="Higher" onPress={handleNextGuess.bind(this, "HIGHER")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
