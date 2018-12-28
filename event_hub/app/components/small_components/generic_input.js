import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class GenericInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeHolder}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          underlineColorAndroid="transparent"
          keyboardType={this.props.keyType}
          maxLength={this.props.MaxLen}
          onChangeText={this.props.On_Change_Text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: heightP("6%"),
    textAlign: "left",
    borderRadius: 25,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)"
  },
  input: {
    paddingLeft: widthP("2%"),
    color: "white"
  }
});
