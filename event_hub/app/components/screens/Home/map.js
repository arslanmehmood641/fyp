import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";
export default class Maps extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 25, color: "green" }}>
          Luxe Marquee and Banquet Halls
        </Text>
        <Text>DHA</Text>
        <View style={{ flexDirection: "row", marginVertical: hp("1%") }}>
          <Icon name="location-on" size={15} color="green" />
          <Text style={{ color: "green" }}>5.2 Miles From Location</Text>
        </View>
        <Text>Rs. 1200 per guest</Text>
        <Text style={{ fontSize: 12 }}>1000+ Guests</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003300",
    marginTop: hp("0.5%"),
    width: wp("100%"),
    height: hp("15%")
  }
});
