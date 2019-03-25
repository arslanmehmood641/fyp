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

export default class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hall1: ""
    };
  }

  render() {
    const nav = this.props.navigation;
    type = this.props.status;
    let hall = this.props.hall;
    //alert(hall.userName);
    this.state.hall1 = hall;
    return (
      <View>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={img}
                style={{
                  height: hp("17.5%"),
                  width: wp("30%"),
                  marginLeft: wp("7%"),
                  position: "relative",
                  marginTop: hp("0.5%"),
                  borderRadius: 100
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "900",
                  color: "#339933",
                  marginTop: hp("2%"),
                  marginLeft: wp("8%")
                }}
              >
                {hall.userName}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "200",
                  color: "#000000",
                  marginTop: hp("0.5%"),
                  marginLeft: wp("8%")
                }}
              >
                {hall.phone}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "200",
                  color: "#000000",
                  marginTop: hp("0.5%"),
                  marginLeft: wp("6%")
                }}
              >
                {hall.eventDate}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000000",
                  marginTop: hp("0.5%"),
                  marginLeft: wp("9%")
                }}
              >
                {hall.city}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "200",
                  color: "#000000",
                  marginTop: hp("0.5%")
                }}
              >
                {hall.email}
              </Text>
            </View>
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
