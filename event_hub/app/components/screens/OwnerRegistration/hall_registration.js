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
      PPH: "",
      b_capacity: "",
      p_capacity: "",
      wifi: "",
      dj: "",
      b_mackup: ""

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
  }
  submit() {
    if (this.state.name != '') {
      let hall = {}
      hall.hall_id = 0;
      hall.name = this.state.name;
      hall.email = this.state.email;
      hall.location = this.state.loc;
      hall.price_per_head = this.state.PPH;
      hall.b_capacity = this.state.b_capacity;
      hall.p_capacity = this.state.p_capacity;
      hall.wifi = this.state.wifi;
      hall.dj = this.state.dj;
      hall.b_mackup = this.state.b_mackup;
      var url = 'https://eventhub-api.conveyor.cloud/api/User/RegisterHall'
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(hall),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
        .catch(error => console.error('Error :', error))
        .then(res => console.warn('Success :', this.state.PPH));

      this.props.navigation.navigate("Congratulations")

    }
    else {
      console.warn("Not Submit")
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <InputField iconName="account-circle" placeHolder="Name"
            On_Change_Text={this.handleNameInput}
          />
          <InputField
            iconName="email"
            placeHolder="Email"
            keyType="email-address"
            On_Change_Text={this.handleEmailInput}
          />
          <InputField iconName="location-on" placeHolder="Location"
            On_Change_Text={this.handlelocInput}
          />
          <GenericPicker
            iconName="attach-money"
            selected_Value={this.state.PPH}
            pickerVals={[
              ["", "Price/Head"],
              ["100", "100"],
              ["200", "200"],
              ["300", "300"],
              ["400", "400"],

            ]}
            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ PPH: itemValue })
            }
          />
          <GenericPicker
            iconName="account-box"
            selected_Value={this.state.b_capacity}
            pickerVals={[
              ["", "Booking Capacity"],
              ["100", "100"],
              ["200", "200"],
              ["300", "300"],
              ["400", "400"],

            ]}

            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ b_capacity: itemValue })
            }
          />
          <GenericPicker
            iconName="account-box"
            selected_Value={this.state.p_capacity}
            pickerVals={[
              ["", "Parking Capacity"],
              ["100", "100"],
              ["200", "200"],
              ["300", "300"],
              ["400", "400"],


            ]}
            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ p_capacity: itemValue })
            }
          />
          <GenericPicker
            iconName="account-box"
            selected_Value={this.state.wifi}
            pickerVals={[
              ["", "Wifi"],
              ["1", "yes"],
              ["2", "No"],

            ]}

            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ wifi: itemValue })
            }
          />
          <GenericPicker
            iconName="account-box"
            selected_Value={this.state.dj}
            pickerVals={[
              ["", "Dj"],
              ["1", "yes"],
              ["2", "No"],

            ]}
            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ dj: itemValue })
            }

          />
          <GenericPicker
            iconName="account-box"
            selected_Value={this.state.b_mackup}
            pickerVals={[
              ["", "Bridal makeUp"],
              ["1", "yes"],
              ["2", "No"],

            ]}

            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ b_mackup: itemValue })
            }
          />
          <TouchButton InText="Register"
            On_Press={() => this.submit()} />
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
