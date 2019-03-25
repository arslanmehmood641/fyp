import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import img from "../../../images/china_wall.jpg";
import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class CustomerDetail extends Component {
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
      Object: this.state.hall1,
      review: "",
      stars: ""
    });
  }

  render() {
    const nav = this.props.navigation;
    type = this.props.status;
    let hall = this.props.hall;

    if (global.check === "Owner") {
      this.state.review = hall.reviewToOwner;
      this.state.stars = hall.starToOwner;
    } else if (global.check === "Customer") {
      this.state.review = hall.reviewToCustomer;
      this.state.stars = hall.starToCustomer;
    }
    this.state.hall1 = hall;
    return (
      <View>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                source={img}
                style={{
                  height: hp("8%"),
                  width: wp("14%"),
                  marginLeft: wp("13%"),
                  position: "relative",
                  marginTop: hp("0.5%"),
                  borderRadius: 100
                }}
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "200",
                  color: "#000000",
                  marginTop: hp("2%"),
                  marginLeft: wp("2s")
                }}
              >
                {hall.userName}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "200",
                  color: "#000000",
                  marginTop: hp("2%"),
                  marginLeft: wp("2s")
                }}
              >
                {this.state.review}
              </Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.stars}
                starSize={25}
                fullStarColor="yellow"
              />
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
    height: hp("13%"),
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    marginTop: hp("1%")
  }
});
