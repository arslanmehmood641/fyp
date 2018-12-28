import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img from "../../../images/china_wall.jpg";

import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class OneHall extends Component {
  constructor(props) {
    super(props);
  }

  Goto(nav, type, obj) {
    if (type === "OwnerHistory")
      nav.navigate("ViewBookingsHistory", { Object: obj });
    else if (type === "OwnerPending")
      nav.navigate("Manage Booking", { Object: obj });
    else if (type === "CustomerHistory")
      nav.navigate("ViewBookingsHistory", { Object: obj });
    else if (type === "CustomerPending")
      nav.navigate("Home Screen", { Object: obj });
  }

  render() {
    const nav = this.props.navigation;
    const type = this.props.userType;
    let hall = this.props.hall;

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
              {hall.hallName}
            </Text>
            <Text>{hall.hallAddress}</Text>
            <View style={{ width: widthP("30%") }}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={hall.rating}
                starSize={15}
                fullStarColor="yellow"
              />
            </View>
            <Text>{hall.guestLimit} guests</Text>
            <Text>{hall.pricePerHead} Rs/-(per head)</Text>
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
