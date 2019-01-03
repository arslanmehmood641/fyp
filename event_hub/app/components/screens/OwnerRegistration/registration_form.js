import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, ScrollView } from "react-native";

import TouchButton from "../../small_components/touch_button";
import DatePicker from "../../small_components/custom_date_picker";
import InputField from "../../small_components/input_field";
import GenericPicker from "../../small_components/generic_picker";
import GenericInput from "../../small_components/generic_input";
import SadaPicker from "../../small_components/sada_picker";

import {
  widthPercentageToDP as wid,
  heightPercentageToDP as hig
} from "react-native-responsive-screen";
//import { ScrollView } from "react-native-gesture-handler";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyTypeID: 0,
      name: "",
      email: "",
      startDate: "",
      totalTime: "",
      streetNo: "",
      houseNo: "",
      townName: "",
      city: "",
      country: "",
      typeOfCompany: ""
    };
    alert(global.id);
  }
  handleName = text => {
    this.setState({
      name: text
    });
  };

  handleEmail = text => {
    this.setState({
      email: text
    });
  };
  handleHouseNo = text => {
    this.setState({
      houseNo: text
    });
  };

  handleStreetNo = text => {
    this.setState({
      streetNo: text
    });
  };

  handleTownName = text => {
    this.setState({
      townName: text
    });
  };

  decideNavigation(nav) {
    const type = this.state.typeOfCompany;
    var obj = this.state;
    if (type === "Media") nav.navigate("Media Registration", { Object: obj });
    else if (type === "Card Designing")
      nav.navigate("Card Registration", { Object: obj });
    else if (type === "Catering")
      nav.navigate("Caterer Registration", { Object: obj });
    else if (type === "Hall")
      nav.navigate("Hall Registration", { Object: obj });
    else alert("Choose Atleast One Type Of Company");
  }

  render() {
    const nav = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <InputField
            iconName="account-circle"
            placeHolder="Company Name"
            On_Change_Text={this.handleName}
          />
          <InputField
            iconName="email"
            placeHolder="Email"
            keyType="email-address"
            MaxLen={25}
            On_Change_Text={this.handleEmail}
          />
          <GenericPicker
            Selected_Value={this.state.typeOfCompany}
            iconName="home"
            pickerVals={[
              "Type Of Company",
              "Media",
              "Card Designing",
              "Catering",
              "Hall"
            ]}
            On_Value_Change={(value, index) =>
              this.setState({ typeOfCompany: value })
            }
          />

          <View style={styles.inputContainer}>
            <Text style={{ marginLeft: wid("2%") }}>Location</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <GenericInput
                placeHolder="Street No"
                keyType="number-pad"
                MaxLen={3}
                On_Change_Text={this.handleStreetNo}
              />
              <GenericInput
                placeHolder="House No"
                keyType="number-pad"
                MaxLen={3}
                On_Change_Text={this.handleHouseNo}
              />
              <GenericInput
                placeHolder="Town Name"
                MaxLen={10}
                On_Change_Text={this.handleTownName}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <SadaPicker
                Selected_Value={this.state.city}
                pickerVals={["City", "Lahore", "Faisalabad", "Islamabad"]}
                On_Value_Change={(value, index) =>
                  this.setState({ city: value })
                }
              />
              <SadaPicker
                Selected_Value={this.state.country}
                pickerVals={["Country", "Pakistan"]}
                On_Value_Change={(value, index) =>
                  this.setState({ country: value })
                }
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ marginLeft: wid("2%") }}>Schedule</Text>
            <DatePicker
              Place_Holder="Start Date"
              iconName="event"
              dateTime={this.state.startDate}
              mode="date"
              format="YYYY-MM-DD."
              On_Date_Change={dat => this.setState({ startDate: dat })}
            />
            <DatePicker
              Place_Holder="Time"
              iconName="timer"
              dateTime={this.state.totalTime}
              mode="time"
              format="HH:MI:SS"
              On_Date_Change={dat => this.setState({ totalTime: dat })}
            />
          </View>
          <TouchButton
            InText="Proceed"
            On_Press={() => this.decideNavigation.bind(this)(nav)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scheduleContainer: {
    borderColor: "blue",
    borderWidth: 5
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 5
  },
  regform: {
    marginHorizontal: wid("10%"),
    marginTop: hig("2%"),
    alignItems: "center"
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    marginBottom: 6
  },
  viewdes: {
    height: hig("6%"),
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "lime",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignSelf: "stretch"
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#59cbbd",
    marginTop: 20
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold"
  },
  text: {
    fontSize: 10,
    alignSelf: "flex-end",
    color: "white"
  }
});
