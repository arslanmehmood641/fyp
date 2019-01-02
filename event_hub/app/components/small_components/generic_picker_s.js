import React, { Component } from "react";
import { View, StyleSheet, Picker } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class GenericPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 12,
      count: 0
    };
  }
  render() {
    const pickerValues = this.props.pickerVals;
    return (
      <View style={styles.picker}>
        <Icon name={this.props.iconName} size={25} style={styles.userIcon} />
        <Picker
          selectedValue={this.props.selected_Value}
          style={styles.pickerStyle}
          mode="dropdown"
          onValueChange={this.props.on_Value_Change}
        >
          {pickerValues.map(val => (
            <Picker.Item
              value={val[0]}
              key={this.state.count++}
              label={val[1]}
            />
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
    flexDirection: "row",
    width: widthP("82%")
  },
  pickerStyle: {
    color: "rgba(255, 255, 255, 0.7)",
    height: heightP("6%"),
    width: widthP("76%"),
    paddingLeft: widthP("2%"),
    position: "relative"
  },
  userIcon: {
    position: "relative",
    paddingTop: heightP("1%"),
    paddingLeft: widthP("2%")
  }
});
