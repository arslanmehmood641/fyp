import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img from "../../../images/Caterer/1.jpg";

import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class OneCaterer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caterer1: ""
    };
  }
  Goto(nav, type, caterer) {
    alert("hello");
    if (type === "OwnerHistory")
      nav.navigate("ViewBookingsHistory", { Object: obj });
    else if (type === "OwnerPending")
      nav.navigate("Manage Booking", { Object: obj });
    else if (type === "CustomerHistory")
      nav.navigate("ViewBookingsHistory", { Object: obj });
    else if (type === "CustomerPending")
      //(type);
      nav.navigate("Caterer Home", { Object: this.state.caterer1 });
  }

  render() {
    const nav = this.props.navigation;
    const type = this.props.userType;
    let caterer = this.props.caterer;
    this.state.caterer1 = caterer;
    //alert(caterer);

    //this.state.hall1 = hall;

    return (
      <TouchableOpacity onPress={() => this.Goto(nav, type, caterer)}>
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
                    marginLeft: wp("6%")
                  }}
                >
                  {caterer.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "200",
                    color: "#000000",
                    marginTop: hp("0.5%"),
                    marginLeft: wp("10%")
                  }}
                >
                  {caterer.townName}
                </Text>

                <StarRating
                  style={styles.rating}
                  disabled={true}
                  maxStars={5}
                  rating={3}
                  starSize={20}
                  containerStyle={{
                    marginLeft: wp("2%"),
                    width: wp("35%")
                    // height: hp("%")
                  }}
                  fullStarColor={"green"}
                  //selectedStar={rating => this.onStarRatingPress(rating)}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "200",
                    color: "#000000",
                    marginTop: hp("0.5%")
                  }}
                >
                  {caterer.email}
                </Text>
              </View>
            </View>
            <View
              style={{
                color: "#000000",
                marginLeft: wp("38%"),
                width: wp("30%"),
                height: hp("5%"),
                borderRadius: 6,
                backgroundColor: "#339933",
                marginBottom: hp("1%")
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "#ffffff",
                  marginTop: hp("0.5%"),
                  textAlign: "center"
                }}
              >
                Details>>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    width: wp("90%"),
    height: hp("25%"),
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    marginTop: hp("1%")
  }
});
