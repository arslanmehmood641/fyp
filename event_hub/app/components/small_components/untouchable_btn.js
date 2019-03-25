import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class UntouchableButton extends Component {
  render() {
    return (
      <View style={styles.justView}>
        <Icon name={this.props.IconName} size={25} />
        <Text style={{ color: "white" }}>{this.props.InText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  justView: {
    width: 390,
    height: 55,
    borderRadius: 7,
    marginTop: 8,
    marginLeft: 10,
    fontSize: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    flexDirection: "row"
  }
});
