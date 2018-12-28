import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class TouchButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={this.props.On_Press}>
          <Text style={styles.txt}>{this.props.InText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBtn: {
    width: widthP("60%"),
    height: heightP("6%"),
    marginVertical: 10,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: "center"
  },
  txt: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});
