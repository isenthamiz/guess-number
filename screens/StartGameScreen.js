import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";

const StartGameScreen = function (props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInputText = function (text) {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetButton = function () {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handleConfirmButton = function () {
    let choosenNumber = parseInt(enteredValue);
    if (
      !choosenNumber ||
      choosenNumber == NaN ||
      choosenNumber <= 0 ||
      choosenNumber > 99
    ) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: handleResetButton },
      ]);
      return;
    }
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
    setConfirmed(true);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summary}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start"
          onPress={props.onStartGame.bind(this, selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.inputContainder}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleInputText}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={handleResetButton}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handleConfirmButton}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainder: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 80,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  summary: {
    margin: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
