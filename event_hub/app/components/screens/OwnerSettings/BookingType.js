import React, { Component } from "react";
import { Container, Header, Content, Button, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfCompany
    };
  }
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
    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeae1",
    // marginTop: hp("5%"),
    width: wp("100%"),
    height: hp("5%")
  },
  packegesText: {
    color: "#00b300",
    marginTop: hp("0.5%"),
    width: wp("100%"),
    //marginLeft: wp("2%"),
    backgroundColor: "#ffffff",
    // position: "absolute",
    fontSize: hp("4%")
  }
});
