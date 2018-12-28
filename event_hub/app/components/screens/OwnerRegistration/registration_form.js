import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TouchButton from "../../small_components/touch_button";

export default class Registration extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Company Registration</Text>
        <Text style={styles.header1}>Select Your Company</Text>

        <TouchButton
          InText="Catering Company"
          On_Press={() => navigate("Caterer Registration")}
        />
        <TouchButton
          InText="Card Designing Company"
          On_Press={() => navigate("Card Registration")}
        />
        <TouchButton
          InText="Media Company"
          On_Press={() => navigate("Media Registration")}
        />
        <TouchButton
          InText="Marriage Hall Company"
          On_Press={() => navigate("Hall Registration")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignItems: "center"
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "gray"
  },
  header1: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
});
