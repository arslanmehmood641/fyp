import React, { Component } from "react";
import { View, FlatList } from "react-native";

import OneHall from "../../small_components/onehall";
const data = require("../../data.json");

export default class CustomerPendingBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hallData: ""
    };
    var url =
      "https://eventhub1.conveyor.cloud/api/Hall/GetAllCustomerPendingHalls";
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.warn("Error :", error))
      .then(res => {
        this.setState({ hallData: res });
      });
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.hallData}
          renderItem={hall => (
            <OneHall
              hall={hall.item}
              navigation={this.props.navigation}
              userType="CustomerPending"
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
