import React, { Component } from "react";
import { View, FlatList } from "react-native";

import OneHall from "../../small_components/onehall";
const data = require("../../data.json");

export default class CustomerPendingBookings extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={data.items}
          renderItem={hall => (
            <OneHall
              hall={hall.item}
              navigation={this.props.navigation}
              userType="UserPending"
            />
          )}
          keyExtractor={(name, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#cccccc" }} />
          )}
        />
      </View>
    );
  }
}
