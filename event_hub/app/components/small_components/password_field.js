import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      pressEyeBtn: false
    };
  }

  onPressEye() {
    if (this.state.pressEyeBtn == false)
      this.setState({
        showPassword: false,
        pressEyeBtn: true
      });
    else
      this.setState({
        showPassword: true,
        pressEyeBtn: false
      });
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Icon name="lock" size={25} style={styles.userIcon} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeHolder}
          maxLength={12}
          secureTextEntry={this.state.showPassword}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={text => this.props.On_Change_Text(text)}
        />
        <TouchableOpacity
          style={styles.pswdEye}
          onPress={this.onPressEye.bind(this)}
        >
          <Icon1
            name={this.state.showPassword ? "ios-eye" : "ios-eye-off"}
            size={25}
          />
        </TouchableOpacity>
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
  pswdEye: {
    position: "relative",
    paddingTop: heightP("1%"),
  },
  input: {
    paddingLeft: widthP("2%"),
    width: widthP("65%"),
    color: "white"
  },
  userIcon: {
    position: "relative",
    paddingTop: heightP("1%"),
    paddingLeft: widthP("2%")
  }
});
