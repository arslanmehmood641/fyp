import React, { Component } from "react";
import Slide from "../Home/Slider";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Date from "react-native-datepicker";
import TouchButton from "../../small_components/touch_button";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "17-12-2018",
      lang: 12,
      lang2: 12,
      prefferedTime: "",
      noOfGuests: "",
      EventDate: "",
      UserName: "",
      UserEmail: "",
      Phone: "",
      city: "",
      HallPackege: "",
      hall: this.props.navigation.state.params.Object
    };
  }
  static navigationOptions = {
    title: "Form"
  };
  handleNameInput = text => {
    this.setState({
      UserName: text
    });
  };
  handleEmailInput = text => {
    this.setState({
      UserEmail: text
    });
  };
  handlePhoneInput = text => {
    this.setState({
      Phone: text
    });
  };
  handleCityInput = text => {
    this.setState({
      city: text
    });
  };
  submit() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const flag = reg.test(this.state.UserEmail);
    if (!flag) alert("Wrong email");
    else if (this.state.Phone.length != 11)
      alert("Phone No Should be 11 digit");
    else if (this.state.UserEmail != "") {
      let b = {};
      b.b_id = 0;
      b.prefferedTime = this.state.prefferedTime;
      b.noOfGuests = this.state.noOfGuests;
      b.eventDate = this.state.EventDate;
      b.userName = this.state.UserName;
      b.userEmail = this.state.UserEmail;
      b.phone = this.state.Phone;
      b.city = this.state.city;
      b.companyID = this.state.hall.companyID;
      //alert(this.state.HallPackege);
      b.packege = this.state.HallPackege;
      b.U_id = global.id;
      b.status = 0;
      var url = "https://eventhub-api.conveyor.cloud/api/User/RegisterBooking";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(b),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json())
        .catch(error => console.error("Error :", error))
        .then(res => alert("submit successfully"));

      this.props.navigation.navigate("Congratulations");
    } else {
      console.warn(this.state.UserEmail);
    }
  }
  render() {
    const prefferedTime = [["Any", ""], ["Dinner", "One"], ["Lunch", "Two"]];
    const HallPackege = [
      ["select Menue", "0"],
      ["Chicken Menue", "1"],
      ["Mutton Menue", "2"],
      ["Beef Menue", "3"]
    ];
    const noOfGuests = [
      ["No of Guests", ""],
      ["50", "50"],
      ["100", "100"],
      ["150", "150"],
      ["200", "200"],
      ["250", "250"],
      ["300", "300"],
      ["350", "350"]
    ];

    return (
      <ScrollView style={{ marginTop: 20, left: 10, right: 10 }}>
        <Slide />
        <View>
          <Text style={{ fontSize: 25, color: "green" }}>
            {this.state.hall.name}
          </Text>
          <Text>{this.state.townName}</Text>
          <View style={{ flexDirection: "row", marginVertical: heightP("1%") }}>
            <Icon name="location-on" size={15} color="green" />
            <Text style={{ color: "green" }}>5.2 Miles From Location</Text>
          </View>
          <Text>Rs. {this.state.hall.price_per_head} per guest</Text>
          <Text style={{ fontSize: 12 }}>
            {this.state.hall.b_capacity}+ Guests
          </Text>
        </View>
        <View style={{ backgroundColor: "#EFF4F5" }}>
          <Text style={{ fontSize: 20, color: "green" }}>
            Enter Your Preferences
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ paddingTop: 15 }}>
              <Text>Preffered Time</Text>
            </View>
            <View>
              <Picker
                selectedValue={this.state.prefferedTime}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ prefferedTime: itemValue })
                }
                style={{ width: widthP("50%") }}
              >
                {prefferedTime.map(val => (
                  <Picker.Item value={val[1]} label={val[0]} />
                ))}
              </Picker>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Date
              placeholder="Event Date"
              date={this.state.EventDate}
              format="YYYY-MM-DD"
              minDate="2018-12-01"
              maxDate="2020-12-01"
              showIcon={false}
              customStyles={{ dateInput: { borderWidth: 0 } }}
              onDateChange={dat => {
                // alert(dat, " ", this.state.EventDate);
                this.setState({ EventDate: dat });
              }}
            />
            <Picker
              selectedValue={this.state.noOfGuests}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ noOfGuests: itemValue })
              }
              style={{ width: widthP("50%") }}
            >
              {noOfGuests.map(val => (
                <Picker.Item value={val[1]} label={val[0]} />
              ))}
            </Picker>
          </View>
          <Text style={{ fontSize: 20, color: "green" }}>Personal Info</Text>
          <View style={{ marginTop: 10 }}>
            <TextInput
              placeholder="Name"
              underlineColorAndroid="transparent"
              style={styles.fullField}
              maxLength={25}
              onChangeText={text => this.setState({ UserName: text })}
            />
            <TextInput
              placeholder="Email"
              underlineColorAndroid="transparent"
              maxLength={25}
              style={styles.fullField}
              keyboardType="email-address"
              onChangeText={text => this.setState({ UserEmail: text })}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                placeholder="City"
                underlineColorAndroid="transparent"
                maxLength={15}
                style={styles.txtInput}
                onChangeText={text => this.setState({ city: text })}
              />
              <TextInput
                placeholder="Phone Number"
                underlineColorAndroid="transparent"
                textContentType="telephoneNumber"
                keyboardType="number-pad"
                style={styles.txtInput}
                onChangeText={text => this.setState({ Phone: text })}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ paddingTop: 15 }}>
                <Text>Select Packege</Text>
              </View>
              <View>
                <Picker
                  selectedValue={this.state.HallPackege}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ HallPackege: itemValue })
                  }
                  style={{ width: widthP("50%") }}
                >
                  {HallPackege.map(val => (
                    <Picker.Item value={val[1]} label={val[0]} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchButton
                InText="Check Availbilty"
                On_Press={() => this.submit()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fullField: {
    paddingLeft: 20,
    marginTop: 10,
    borderBottomWidth: 2,
    marginRight: 20,
    borderColor: "green"
  },
  searchButton: {
    textAlign: "center",
    color: "white"
  },
  btnContainer: {
    width: 330,
    height: 50,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    right: 10
  },
  txtInput: {
    width: widthP("44%"),
    paddingLeft: 20,
    marginTop: 10,
    borderBottomWidth: 2,
    marginRight: 20,
    borderColor: "green"
  }
});
