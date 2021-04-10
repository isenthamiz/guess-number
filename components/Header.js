import React, { useState } from "react";
import { View, Text, StyleSheet, ProgressViewIOSComponent } from "react-native";

import Color from "../constants/colors";

const Header = function (props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
