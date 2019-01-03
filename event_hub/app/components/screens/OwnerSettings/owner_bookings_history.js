import React, { Component } from "react";
import { View, FlatList } from "react-native";
import OneBooking from "../../small_components/OneBooking";
import GenericPicker from "../../small_components/generic_picker";
const data = require("../../data.json");
export default class OwnerPendingBookings extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true, //check if json data fetch online
      data: [], //store an object of json data
      typeOfCompany: "Hall"
    };
  }
  decideNavigation() {
    const type = this.state.typeOfCompany;
    var obj = this.state;
    if (type === "Media") {
      this.pendingBookingForMedia();
    } else if (type === "Catering") this.pendingBookingForCaterer();
    else if (type === "Hall") {
      this.pendingBookingForHall();
    }
  }
  pendingBookingForHall() {
    var url =
      "https://eventhub-api.conveyor.cloud/api/Owner/OwnerApprovedRequestsHall?id=" +
      global.id;
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ data: res });
        if (this.state.data.length == 0) {
          alert("no booking found");
        }
      });
  }
  pendingBookingForMedia() {
    var url =
      "https://eventhub-api.conveyor.cloud/api/Owner/OwnerApprovedRequestsMedia?id=" +
      global.id;
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ data: res });
        if (this.state.data.length == 0) {
          alert("no booking found");
        }
      });
  }
  pendingBookingForCaterer() {
    var url =
      "https://eventhub-api.conveyor.cloud/api/Owner/OwnerApprovedRequestsCaterer?id=" +
      global.id;
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ data: res });
        if (this.state.data.length == 0) {
          alert("no booking found");
        }
      });
  }
  componentDidMount() {
    this.pendingBookingForHall();
  }
  render() {
    return (
      <View>
        <View style={{ alignItems: "center" }}>
          <GenericPicker
            Selected_Value={this.state.typeOfCompany}
            iconName="home"
            pickerVals={["Hall", "Media", "Catering"]}
            On_Value_Change={(value, index) =>
              this.setState({ typeOfCompany: value }, () => {
                // here is our callback that will be fired after state change.
                this.decideNavigation();
              })
            }
          />
        </View>
        <FlatList
          data={this.state.data}
          renderItem={hall => (
            <OneBooking
              hall={hall.item}
              navigation={this.props.navigation}
              userType={this.state.typeOfCompany}
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
