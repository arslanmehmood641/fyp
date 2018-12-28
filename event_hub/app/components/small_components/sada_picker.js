import React, { Component } from "react";
import { View, StyleSheet, Picker } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class SadaPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const pickerValues = this.props.pickerVals;
    return (
      <View style={styles.picker}>
        <Picker
          selectedValue={this.props.Selected_Value}
          style={styles.pickerStyle}
          mode="dropdown"
          onValueChange={this.props.On_Value_Change}
        >
          {pickerValues.map(val => (
            <Picker.Item value={val} label={val} key={this.state.count++} />
          ))}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row"
  },
  pickerStyle: {
    color: "rgba(255, 255, 255, 0.7)",
    height: heightP("6%"),
    width: widthP("40%"),
    paddingLeft: widthP("2%"),
    position: "relative"
  },
  userIcon: {
    position: "relative",
    paddingTop: heightP("1%"),
    paddingLeft: widthP("2%")
  }
});
