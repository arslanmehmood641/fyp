import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

import TouchButton from "../../small_components/touch_button";
import PasswordField from "../../small_components/password_field";
import InputField from "../../small_components/input_field";
import GenericPicker from "../../small_components/generic_picker";

import {
  widthPercentageToDP as wid,
  heightPercentageToDP as hig
} from "react-native-responsive-screen";

export default class CatererRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDesignName: "",
      itemName: "",
      perDayPrice: 0
    };
  }

  handlePerDayPrice = txt => {
    this.setState({
      perDayPrice: txt
    });
  };

  handleCardDesignName = text => {
    this.setState({
      name: text
    });
  };

  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>

        <InputField
          iconName="account-circle"
          placeHolder="Name"
          On_Change_Text={this.handleCardDesignName}
        />
        <GenericPicker
          Selected_Value={this.state.itemName}
          iconName="card-giftcard"
          pickerVals={["Item Name", "Media", "Card Designing", "Catering"]}
          On_Value_Change={(value, index) => this.setState({ itemName: value })}
        />
        <InputField
          iconName="attach-money"
          placeHolder="Per Day Price"
          keyType="number-pad"
          MaxLen={3}
          On_Change_Text={this.handlePerDayPrice}
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
