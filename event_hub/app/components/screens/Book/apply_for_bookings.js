import React, { Component } from "react";
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
import Toast from "react-native-simple-toast";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      mealTime: "",
      noOfGuests: "",
      count1: 0,
      count2: 0,
      name: "",
      email: "",
      city: "",
      phone: ""
    };
  }
  static navigationOptions = {
    title: "Form"
  };

  render() {
    const prefferedTime = ["Any", "Dinner", "Lunch"];
    const noOfGuests = [
      "No of Guests",
      "1-50",
      "51-100",
      "101-150",
      "151-200",
      "201-250",
      "251-300",
      "301-350",
      "351-400",
      "401-450",
      "451-500",
      "501-550",
      "551-600",
      "601-650",
      "651-700",
      "701-750"
    ];
    return (
      <ScrollView style={{ marginTop: 20, left: 10, right: 10 }}>
        <View>
          <Text style={{ fontSize: 25, color: "green" }}>
            Luxe Marquee and Banquet Halls
          </Text>
          <Text>DHA</Text>
          <View style={{ flexDirection: "row", marginVertical: heightP("1%") }}>
            <Icon name="location-on" size={15} color="green" />
            <Text style={{ color: "green" }}>5.2 Miles From Location</Text>
          </View>
          <Text>Rs. 1200 per guest</Text>
          <Text style={{ fontSize: 12 }}>1000+ Guests</Text>
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
                selectedValue={this.state.mealTime}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ mealTime: itemValue })
                }
                style={{ width: widthP("50%") }}
              >
                {prefferedTime.map(val => (
                  <Picker.Item
                    value={val}
                    label={val}
                    key={this.state.count1++}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Date
              placeholder="Event Date"
              date={this.state.date}
              format="DD-MM-YYYY"
              minDate="01-12-2018"
              maxDate="01-12-2022"
              showIcon={false}
              customStyles={{ dateInput: { borderWidth: 0 } }}
              onDateChange={dat => {
                this.setState({ date: dat });
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
                <Picker.Item
                  value={val}
                  label={val}
                  key={this.state.count2++}
                />
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
              onChangeText={txt => this.setState({ name: txt })}
            />
            <TextInput
              placeholder="Email"
              underlineColorAndroid="transparent"
              maxLength={25}
              style={styles.fullField}
              keyboardType="email-address"
              onChangeText={txt => this.setState({ email: txt })}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                placeholder="City"
                underlineColorAndroid="transparent"
                maxLength={15}
                style={styles.txtInput}
                onChangeText={txt => this.setState({ city: txt })}
              />
              <TextInput
                placeholder="Phone Number"
                underlineColorAndroid="transparent"
                keyboardType="number-pad"
                maxLength={11}
                style={styles.txtInput}
                onChangeText={txt => this.setState({ phone: txt })}
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchButton
            InText="Check Availability"
            On_Press={() =>
              Toast.show(
                this.state.noOfGuests +
                  " => " +
                  this.state.mealTime +
                  " => " +
                  this.state.date,
                Toast.LONG
              )
            }
          />
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
