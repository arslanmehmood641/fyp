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

export default class BookingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hall1: "",
      hall: this.props.navigation.state.params.Object
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

    let hall = this.props.bookingData;
    // alert(hall.userName);
    //this.state.hall1 = hall;

    return (
      <View>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "#000000",
              marginTop: hp("2%"),
              textAlign: "center"
            }}
          >
            Booking Discription
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#000000",
              marginTop: hp("0.5%"),
              textAlign: "center"
            }}
          >
            i am going to arrange a beautiful event there.i am going to arrange
            a beautiful event there.i am going to arrange a beautiful event
            there
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#000000",
                marginTop: hp("0.5%"),
                marginLeft: wp("4%")
              }}
            >
              Start Date : 12-Feb-2019
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#000000",
                marginTop: hp("0.5%"),
                marginLeft: wp("10%")
              }}
            >
              End Date : 12-Feb-2019
            </Text>
          </View>
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
    height: hp("20%"),
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    marginTop: hp("1%")
  }
});
