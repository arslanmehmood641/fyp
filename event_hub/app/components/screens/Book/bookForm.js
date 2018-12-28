import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class Form extends Component {
  static navigationOptions = {
    title: "Form"
  };
  render() {
    return (
      <View style={{ marginTop: 20, left: 10, right: 10 }}>
        <Text style={{ fontSize: 25 }}>Find The Best Deals</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "green" }}>Enter your prferences</Text>
          <TextInput
            placeholder="Area"
            underlineColorAndroid="transparent"
            style={{
              paddingLeft: 20,
              marginTop: 10,
              borderWidth: 1,
              marginRight: 20,
              borderColor: "gray",
              borderRadius: 10
            }}
          />
          <TextInput
            placeholder="Venue Name"
            underlineColorAndroid="transparent"
            maxLength={10}
            style={{
              paddingLeft: 20,
              marginTop: 10,
              borderWidth: 1,
              marginRight: 20,
              borderColor: "gray",
              borderRadius: 10
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              placeholder="City"
              underlineColorAndroid="transparent"
              style={styles.txtInput}
            />
            <TextInput
              placeholder="Any Capacity"
              underlineColorAndroid="transparent"
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              maxLength={5}
              style={styles.txtInput}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.searchButton}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    textAlign: "center",
    color: "white"
  },
  btnContainer: {
    width: 330,
    height: 50,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    right: 10
  },
  txtInput: {
    width: 160,
    paddingLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    marginRight: 20,
    borderColor: "gray",
    borderRadius: 10
  }
});
