import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import TouchButton from "../../small_components/touch_button";
import PasswordField from "../../small_components/password_field";
import InputField from "../../small_components/input_field";
import GenericPicker from "../../small_components/generic_picker";

import {
  widthPercentageToDP as wid,
  heightPercentageToDP as hig
} from "react-native-responsive-screen";

export default class HallRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pswd: ""
    };
  }
  handleEmailInput = text => {
    this.setState({
      email: text
    });
  };

  handlePswdInput = text => {
    this.setState({
      pswd: text
    });
  };

  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>

        <InputField iconName="account-circle" placeHolder="Name" />
        <PasswordField
          placeHolder="Password"
          On_Change_Text={this.handlePswdInput}
        />
        <InputField
          iconName="email"
          placeHolder="Email"
          keyType="email-address"
          On_Change_Text={this.handleEmailInput}
        />
        <InputField iconName="location-on" placeHolder="Location" />
        <GenericPicker
          iconName="attach-money"
          pickerVals={["Price/Head", "100", "200", "300", "400", "Other"]}
        />
        <GenericPicker
          iconName="account-box"
          pickerVals={["No. Of Guests", "100", "200", "300", "400", "Other"]}
        />

        <TouchButton InText="Register" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    marginHorizontal: wid("10%"),
    marginTop: hig("5%"),
    alignItems: "center"
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    marginBottom: 20
  }
});
