import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <Icon name={this.props.iconName} size={25} style={styles.userIcon} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeHolder}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          underlineColorAndroid="transparent"
          keyboardType={this.props.keyType}
          onChangeText={text => this.props.On_Change_Text(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: widthP("82%"),
    height: heightP("6%"),
    textAlign: "left",
    borderRadius: 25,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)"
  },
  userIcon: {
    position: "relative",
    paddingTop: heightP("1%"),
    paddingLeft: widthP("2%")
  },
  input: {
    paddingLeft: widthP("2%"),
    width: widthP("68%"),
    color: "white"
  }
});
