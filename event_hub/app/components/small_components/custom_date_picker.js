import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Date from "react-native-datepicker";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <Icon name={this.props.iconName} size={25} style={styles.userIcon} />
        <Date
          placeholder={this.props.Place_Holder}
          date={this.props.dateTime}
          format={this.props.format}
          showIcon={false}
          mode={this.props.mode}
          customStyles={{ dateInput: { borderWidth: 0 } }}
          onDateChange={this.props.On_Date_Change}
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
