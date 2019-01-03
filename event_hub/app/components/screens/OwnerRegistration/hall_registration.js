import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
      name: "",
      email: "",
      loc: "",
      PPH: "Price/Head",
      b_capacity: "Booking Capacity",
      p_capacity: "Parking Capacity",
      wifi: "WiFi",
      dj: "DJ",
      b_mackup: "Bridal makeUp"
    };
  }
  handleNameInput = text => {
    this.setState({
      name: text
    });
  };
  handleEmailInput = text => {
    this.setState({
      email: text
    });
  };
  handlelocInput = text => {
    this.setState({
      loc: text
    });
  };
  handlePPHInput = text => {
    this.setState({
      PPH: text
    });
  };
  handleBcapacityInput = text => {
    this.setState({
      b_capacity: text
    });
  };
  handleBcapacityInput = text => {
    this.setState({
      b_capacity: text
    });
    handlePcapacityInput = text => {
      this.setState({
        p_capacity: text
      });
    };
  };
  handlWifiInput = text => {
    this.setState({
      wifi: text
    });
  };
  handleDjInput = text => {
    this.setState({
      dj: text
    });
  };
  handleBmakeupInput = text => {
    this.setState({
      b_mackup: text
    });
  };
  submit(nav, genericCompany) {
    if (this.state.PPH === "Price/Head")
      alert("Price Per Head Is Not Provided");
    else if (this.state.b_capacity === "Booking Capacity")
      alert("Booking Capacity Is Not Provided");
    else if (this.state.p_capacity === "Parking Capacity")
      alert("Parking Capacity Is Not Provided");
    else if (this.state.wifi === "WiFi") alert("Wifi Is Not Provided");
    else if (this.state.dj === "Dj") alert("DJ Is Not Provided");
    else if (this.state.b_mackup === "Bridal makeUp")
      alert("Booking Capacity Is Not Provided");
    else if (genericCompany.name != "") {
      let hall = {};
      hall.companyID = genericCompany.companyID;
      hall.name = genericCompany.name;
      hall.email = genericCompany.email;
      hall.startDate = genericCompany.startDate;
      hall.totalTime = genericCompany.totalTime;
      hall.streetNo = genericCompany.streetNo;
      hall.houseNo = genericCompany.houseNo;
      hall.townName = genericCompany.townName;
      hall.city = genericCompany.city;
      hall.country = genericCompany.country;
      hall.price_per_head = this.state.PPH;
      hall.b_capacity = this.state.b_capacity;
      hall.p_capacity = this.state.p_capacity;
      hall.wifi = this.state.wifi;
      hall.dj = this.state.dj;
      hall.b_mackup = this.state.b_mackup;
      hall.U_id = global.id;
      var url = "https://eventhub-api.conveyor.cloud/api/Hall/RegisterHall";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(hall),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json())
        .catch(error => console.error("Error :", error))
        .then(res => alert("register Successfully"));

      this.props.navigation.navigate("Congratulations");
    } else {
      console.warn("Not Submit");
    }
  }
  render() {
    const { navigation } = this.props;
    const nav = this.props.navigation;
    const genericCompany = navigation.getParam("Object");
    return (
      <ScrollView>
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <GenericPicker
            iconName="attach-money"
            Selected_Value={this.state.PPH}
            On_Value_Change={(value, index) => this.setState({ PPH: value })}
            pickerVals={["Price/Head", "100", "200", "300", "400"]}
            placeHolder={this.state.PPH}
          />
          <GenericPicker
            iconName="account-box"
            Selected_Value={this.state.b_capacity}
            On_Value_Change={(value, index) =>
              this.setState({ b_capacity: value })
            }
            pickerVals={["Booking Capacity", "100", "200", "300", "400"]}
            placeHolder={this.state.b_capacity}
          />
          <GenericPicker
            iconName="account-box"
            Selected_Value={this.state.p_capacity}
            On_Value_Change={(value, index) =>
              this.setState({ p_capacity: value })
            }
            pickerVals={["Parking Capacity", "100", "200", "300", "400"]}
            placeHolder={this.state.p_capacity}
          />
          <GenericPicker
            iconName="account-box"
            Selected_Value={this.state.wifi}
            On_Value_Change={(value, index) => this.setState({ wifi: value })}
            pickerVals={["Wifi", "yes", "No"]}
            placeHolder={this.state.wifi}
          />
          <GenericPicker
            iconName="account-box"
            Selected_Value={this.state.dj}
            On_Value_Change={(value, index) => this.setState({ dj: value })}
            pickerVals={["Dj", "yes", "No"]}
            placeHolder={this.state.dj}
          />
          <GenericPicker
            iconName="account-box"
            Selected_Value={this.state.b_mackup}
            On_Value_Change={(value, index) =>
              this.setState({ b_mackup: value })
            }
            pickerVals={["Bridal makeUp", "yes", "No"]}
            placeHolder={this.state.b_mackup}
          />
          <TouchButton
            InText="Register"
            On_Press={() => this.submit(nav, genericCompany)}
          />
        </View>
      </ScrollView>
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
