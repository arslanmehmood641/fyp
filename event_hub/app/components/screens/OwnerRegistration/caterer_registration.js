import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { CheckBox } from "react-native-elements";
import TouchButton from "../../small_components/touch_button";
import InputField from "../../small_components/input_field";
import {
  widthPercentageToDP as wid,
  heightPercentageToDP as hig
} from "react-native-responsive-screen";
import Toast from "react-native-simple-toast";
export default class CatererRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tent: "",
      generator: 0,
      heater: 0,
      servingStaff: 0,
      lights: 0,
      stageDecorations: 0,
      cooking: 0,
      bridalRoom: 0,
      airCondition: 0,
      valetParking: 0,
      wifi: 0,
      dj: 0,
      decoration: 0
    };
  }

  handleTent = text => {
    this.setState({
      tent: text
    });
  };
  decideNavigation(nav, genericCompany) {
    let CaterCompany = {};
    CaterCompany.companyID = genericCompany.companyID;
    CaterCompany.name = genericCompany.name;
    CaterCompany.email = genericCompany.email;
    CaterCompany.startDate = genericCompany.startDate;
    CaterCompany.totalTime = genericCompany.totalTime;
    CaterCompany.streetNo = genericCompany.streetNo;
    CaterCompany.houseNo = genericCompany.houseNo;
    CaterCompany.townName = genericCompany.townName;
    CaterCompany.city = genericCompany.city;
    CaterCompany.country = genericCompany.country;
    CaterCompany.tent = this.state.tent;
    CaterCompany.generator = this.state.generator;
    CaterCompany.heater = this.state.heater;
    CaterCompany.servingStaff = this.state.servingStaff;
    CaterCompany.lights = this.state.lights;
    CaterCompany.stageDecorations = this.state.stageDecorations;
    CaterCompany.cooking = this.state.cooking;
    CaterCompany.bridalRoom = this.state.bridalRoom;
    CaterCompany.airCondition = this.state.airCondition;
    CaterCompany.valetParking = this.state.valetParking;
    CaterCompany.wifi = this.state.wifi;
    CaterCompany.dj = this.state.dj;
    CaterCompany.decoration = this.state.decoration;
    var url = 'https://eventhub-api.conveyor.cloud/api/Caterer/RegisterCaterer'
    fetch(url, {
      method: "POST",
      body: JSON.stringify(CaterCompany),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.warn("Error :", error))
      .then(res => {
        if (res === 1)
          Toast.show("Account Is Registered Successfully", Toast.SHORT);
        else if (res === 2)
          Toast.show("Credentials are not valid", Toast.SHORT);
      });
  }
  render() {
    const { navigation } = this.props;
    const nav = this.props.navigation;
    const genericCompany = navigation.getParam("Object");
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>
        <InputField
          iconName="home"
          placeHolder="Tents"
          On_Change_Text={this.handleTent}
        />
        <View style={{ flexDirection: "row" }}>
          <View>
            <CheckBox
              title="Generator"
              checked={this.state.generator}
              onPress={() =>
                this.setState({ generator: this.state.generator ? 0 : 1 })
              }
            />
            <CheckBox
              title="Serving Staff"
              checked={this.state.servingStaff}
              onPress={() =>
                this.setState({ servingStaff: this.state.servingStaff ? 0 : 1 })
              }
            />
            <CheckBox
              title="Heater"
              checked={this.state.heater}
              onPress={() =>
                this.setState({ heater: this.state.heater ? 0 : 1 })
              }
            />
          </View>
          <View>
            <CheckBox
              title="Lights"
              checked={this.state.lights}
              onPress={() =>
                this.setState({ lights: this.state.lights ? 0 : 1 })
              }
            />
            <CheckBox
              title="Stage Decorations"
              checked={this.state.stageDecorations}
              onPress={() =>
                this.setState({
                  stageDecorations: this.state.stageDecorations ? 0 : 1
                })
              }
            />
            <CheckBox
              title="Cooking"
              checked={this.state.cooking}
              onPress={() =>
                this.setState({ cooking: this.state.cooking ? 0 : 1 })
              }
            />
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 20 }}>Other Services:</Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <CheckBox
                title="Bridal Room"
                checked={this.state.bridalRoom}
                onPress={() =>
                  this.setState({ bridalRoom: this.state.bridalRoom ? 0 : 1 })
                }
              />
              <CheckBox
                title="Valet Parking"
                checked={this.state.valetParking}
                onPress={() =>
                  this.setState({
                    valetParking: this.state.valetParking ? 0 : 1
                  })
                }
              />
              <CheckBox
                title="DJ"
                checked={this.state.dj}
                onPress={() => this.setState({ dj: this.state.dj ? 0 : 1 })}
              />
            </View>
            <View>
              <CheckBox
                title="Air Condition"
                checked={this.state.airCondition}
                onPress={() =>
                  this.setState({
                    airCondition: this.state.airCondition ? 0 : 1
                  })
                }
              />
              <CheckBox
                title="Wi-Fi"
                checked={this.state.wifi}
                onPress={() =>
                  this.setState({
                    wifi: this.state.wifi ? 0 : 1
                  })
                }
              />
              <CheckBox
                title="Decoration"
                checked={this.state.decoration}
                onPress={() =>
                  this.setState({ decoration: this.state.decoration ? 0 : 1 })
                }
              />
            </View>
          </View>
        </View>
        <TouchButton
          InText="Register"
          On_Press={() => this.decideNavigation.bind(this)(nav, genericCompany)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    marginHorizontal: wid("10%"),
    marginTop: hig("5%"),
    alignItems: "center"
  },
  checkBoxContainer: {
    flexDirection: "row"
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    marginBottom: 15
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
    padding: 10,
    backgroundColor: "#59cbbd",
    marginTop: 15
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
