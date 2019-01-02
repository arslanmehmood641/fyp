import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img from "../../../images/china_wall.jpg";
import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";
export default class OneBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hall1: ""
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
    alert(type);
    let hall = this.props.hall;
    this.state.hall1 = hall;
    return (
      <TouchableOpacity onPress={() => this.Goto(nav, type, hall)}>
        <View style={styles.container}>
          <Image
            source={img}
            style={{
              height: heightP("15%"),
              width: widthP("30%"),
              marginRight: 20,
              position: "relative"
            }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "100", color: "green" }}>
              {hall.userEmail}
            </Text>
            <Text>{hall.eventDate}</Text>
            <View style={{ width: widthP("30%") }} />
            <Text>{hall.prefferedTime} </Text>
            <Text>{hall.city} </Text>
            <Text>{hall.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10
  }
});
