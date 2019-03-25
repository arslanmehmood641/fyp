import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TouchButton from "../../small_components/touch_button";
import { CheckBox } from "react-native-elements";
import GenericPicker from "../../small_components/generic_picker";
import InputField from "../../small_components/input_field";
import SadaPicker from "../../small_components/sada_picker";
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
      b_mackup: "Bridal makeUp",
      chicken_main: "chicken",
      chicken_sweet: "sweet",
      chicken_rice: "rice",
      chicken_starter: "starter",
      mutton_main: "chicken",
      mutton_sweet: "sweet",
      mutton_rice: "rice",
      mutton_starter: "starter",
      beef_main: "chicken",
      beef_sweet: "sweet",
      beef_rice: "rice",
      beef_starter: "starter",
      chicken_price: "400",
      mutton_price: "700",
      beef_price: "600"
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
    handleChicken_Main = text => {
      this.setState({
        chicken_main: text
      });
    };

    handleChicken_starter = text => {
      this.setState({
        chicken_starter: text
      });
    };
  };
  handleMutton_Main = text => {
    this.setState({
      mutton_main: text
    });
  };

  handleMutton_starter = text => {
    this.setState({
      mutton_starter: text
    });
  };
  handleMutton_price = text => {
    this.setState({
      mutton_price: text
    });
  };
  handleChicken_price = text => {
    this.setState({
      chicken_price: text
    });
  };
  handleBeef_price = text => {
    this.setState({
      beef_price: text
    });
  };
  handleBeef_Main = text => {
    this.setState({
      beef_main: text
    });
  };

  handleBeef_starter = text => {
    this.setState({
      beef_starter: text
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
      hall.chicken_main = this.state.chicken_main;
      hall.chicken_rice = this.state.chicken_rice;
      hall.chicken_starter = this.state.chicken_starter;
      hall.chicken_sweet = this.state.chicken_sweet;
      hall.mutton_main = this.state.mutton_main;
      hall.mutton_rice = this.state.mutton_rice;
      hall.mutton_sweet = this.state.mutton_sweet;
      hall.mutton_starter = this.state.mutton_starter;
      hall.beef_main = this.state.beef_main;
      hall.beef_rice = this.state.beef_rice;
      hall.beef_sweet = this.state.beef_sweet;
      hall.beef_starter = this.state.beef_starter;
      hall.chickenPrice = this.state.chicken_price;
      hall.muttonPrice = this.state.mutton_price;
      hall.beefPrice = this.state.beef_price;
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
        <Text style={styles.header}>Registration</Text>
        <View style={styles.regform}>
          <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
            Facilities
          </Text>
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
        </View>
        <Text style={styles.header}>Enter your Packeges</Text>
        <View style={styles.regform}>
          <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
            Chicken Menue
          </Text>
          <InputField
            iconName="account-circle"
            placeHolder="Main Chicken Dish"
            On_Change_Text={this.handleChicken_Main}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SadaPicker
              Selected_Value={this.state.chicken_rice}
              pickerVals={["Rice Dish", "Bryani", "dish1", "dish2"]}
              On_Value_Change={(value, index) =>
                this.setState({ chicken_rice: value })
              }
            />
            <SadaPicker
              Selected_Value={this.state.chicken_sweet}
              pickerVals={["Sweet Dish", "Gajar ka halwa"]}
              On_Value_Change={(value, index) =>
                this.setState({ chicken_sweet: value })
              }
            />
          </View>

          <InputField
            iconName="account-circle"
            placeHolder="starter"
            On_Change_Text={this.handleChicken_starter}
          />
          <InputField
            iconName="account-circle"
            placeHolder="Per Head Price"
            On_Change_Text={this.handleChicken_price}
          />
        </View>
        <View style={styles.regform}>
          <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
            Mutton Menue
          </Text>
          <InputField
            iconName="account-circle"
            placeHolder="Main Chicken Dish"
            On_Change_Text={this.handleMutton_Main}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SadaPicker
              Selected_Value={this.state.mutton_sweet}
              pickerVals={["Sweet Dish", "gajar ka halwa", "dish", "dish2"]}
              On_Value_Change={(value, index) =>
                this.setState({ mutton_sweet: value })
              }
            />
            <SadaPicker
              Selected_Value={this.state.mutton_rice}
              pickerVals={["Rice Dish", "plawo"]}
              On_Value_Change={(value, index) =>
                this.setState({ mutton_rice: value })
              }
            />
          </View>

          <InputField
            iconName="account-circle"
            placeHolder="Starter"
            On_Change_Text={this.handleMutton_starter}
          />
          <InputField
            iconName="account-circle"
            placeHolder="Per head Price"
            On_Change_Text={this.handleMutton_price}
          />
        </View>
        <View style={styles.regform}>
          <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
            Beef Menue
          </Text>
          <InputField
            iconName="account-circle"
            placeHolder="Main Beef Dish"
            On_Change_Text={this.handleBeef_Main}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SadaPicker
              Selected_Value={this.state.beef_rice}
              pickerVals={["Rice Dish", "plawo", "dish1", "dish2"]}
              On_Value_Change={(value, index) =>
                this.setState({ beef_rice: value })
              }
            />
            <SadaPicker
              Selected_Value={this.state.beef_sweet}
              pickerVals={["Sweet Dish", "ice cream"]}
              On_Value_Change={(value, index) =>
                this.setState({ beef_sweet: value })
              }
            />
          </View>

          <InputField
            iconName="account-circle"
            placeHolder="starter"
            On_Change_Text={this.handleBeef_starter}
          />
          <InputField
            iconName="account-circle"
            placeHolder="Beef price"
            On_Change_Text={this.handleBeef_price}
          />
        </View>
        <TouchButton
          InText="Register"
          On_Press={() => this.submit(nav, genericCompany)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    marginHorizontal: wid("9%"),
    marginTop: hig("2%"),
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 86,
    paddingVertical: 8,
    marginVertical: 8
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5
    //marginBottom: 20
  },
  inputContainer: {}
});
