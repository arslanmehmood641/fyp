import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import hallImg from "../../../images/china_wall.jpg";

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
    alert(hall.location);
    if (type === "UserPending") nav.navigate("Form", { Object: hall });
    else if (type === "OwnerHistory") nav.navigate("Home Screen");
  }

  render() {
    const nav = this.props.navigation;
    const type = this.props.userType;
    let hall = this.props.hall;
    return (
      <TouchableOpacity onPress={() => this.Goto(nav, type, hall)}>
        <View style={styles.container}>
          <Image
            source={hallImg}
            style={{
              height: heightP("15%"),
              width: widthP("30%"),
              marginRight: 20,
              position: "relative"
            }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "100", color: "green" }}>
              {hall.location}
            </Text>
            <Text>{hall.location}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={1.5}
              starSize={15}
              fullStarColor="yellow"
            />
            <Text>{hall.b_capacity} guests</Text>
            <Text>{hall.price_per_head} Rs/-(per head)</Text>
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
