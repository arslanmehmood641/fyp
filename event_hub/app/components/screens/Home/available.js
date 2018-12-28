import React, { Component } from "react";

import { Container, Header, Content, Button, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginLeft: wp("2%") }}>Rs.975</Text>
        <Text style={styles.textStyle}>350-400 guests</Text>
        <Button style={styles.ButtonStyle}>
          <Text>Check Availbility</Text>
        </Button>
        <Text>pay later on selected venue</Text>
        <Text style={styles.packegesText}>Packeges</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeae1",
    marginTop: hp("0.5%"),
    width: wp("100%"),
    height: hp("19%")
  },
  textStyle: {
    flex: 1,
    marginLeft: wp("70%"),
    height: hp("1000%")
  },
  ButtonStyle: {
    flex: 1,
    marginLeft: wp("6%"),

    backgroundColor: "#099304",

    width: wp("40%"),
    height: hp("8%")
  },
  packegesText: {
    color: "#00b300",
    //marginTop: hp("50%"),
    width: wp("100%"),
    //marginLeft: wp("2%"),
    backgroundColor: "#ffffff",
    fontSize: hp("4%")
  }
});
