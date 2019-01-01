import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img from "../../../images/photo.jpg";

import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";
export default class OneCaterer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caterer1: ""
    };
  }
  Goto(nav, type, caterer) {
    if (type === "OwnerHistory")
      nav.navigate("ViewBookingsHistory", { Object: obj });
    else if (type === "OwnerPending")
      nav.navigate("Manage Booking", { Object: obj });
    else if (type === "CustomerHistory")
      nav.navigate("ViewBookingsHistory", { Object: obj });
    else if (type === "CatererHome") alert(type);
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
              {caterer.name}
            </Text>
            <Text>{caterer.city}</Text>
            <View style={{ width: widthP("30%") }}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={4}
                starSize={15}
                fullStarColor="yellow"
              />
            </View>
            <Text>{caterer.decoration} Available</Text>
            <Text>{caterer.servingStaff} Available</Text>
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
