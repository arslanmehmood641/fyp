import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import img from "../../../images/china_wall.jpg";
import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Button } from "native-base";

export default class PackegeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hall1: "",
      main: "",
      sweet: "",
      rice: "",
      starter: "",
      price: ""
    };
  }
  Goto(nav, type, hall) {
    // alert(type);
    this.state.hall1.companyType = type;
    nav.navigate("Manage Booking", {
      Object: this.state.hall1
    });
  }
  render() {
    const nav = this.props.navigation;
    type = this.props.userType;

    let hall = this.props.hall;
    if (hall.packege === 1) {
      this.state.main = hall.chicken_main;
      this.state.rice = hall.chicken_rice;
      this.state.sweet = hall.chicken_sweet;
      this.state.starter = hall.chicken_starter;
      this.state.price = hall.chickenPrice;
    } else if (hall.packege === 2) {
      this.state.main = hall.mutton_main;
      this.state.rice = hall.mtton_rice;
      this.state.sweet = hall.mutton_sweet;
      this.state.starter = hall.mutton_starter;
      this.state.price = hall.muttonPrice;
    } else if (hall.packege === 3) {
      this.state.main = hall.beef_main;
      this.state.rice = hall.beef_rice;
      this.state.sweet = hall.beef_sweet;
      this.state.starter = hall.beef_starter;
      this.state.price = hall.beefPrice;
    }

    this.state.hall1 = hall;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.t2}>MainDish</Text>
          <Text style={styles.t1}>{this.state.main}</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.t2}>Rice Dish</Text>
          <Text style={styles.t1}>{this.state.rice}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.t2}>SweetDish</Text>
          <Text style={styles.t1}>{this.state.sweet}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.t2}>Starter</Text>
          <Text style={styles.t1}>{this.state.starter}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.t2}>price</Text>
          <Text style={styles.t1}>{this.state.price}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    width: wp("90%"),
    height: hp("30%"),
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    marginTop: hp("1%")
  },
  t1: {
    marginLeft: wp("20%"),
    marginTop: hp("1%")
  },
  t2: {
    marginLeft: wp("15%"),
    marginTop: hp("1%")
  }
});
