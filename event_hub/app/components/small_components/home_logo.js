import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import homeImg from "../../../images/home_logo.png";
import {
    heightPercentageToDP as heightP
  } from "react-native-responsive-screen";

export default class HomeLogo extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image source={homeImg} style={styles.logo} />
        <Text style={styles.logoText}>Event Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: heightP("10%"),
    marginBottom: heightP("2%"),
  },
  logoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.3
  }
});
