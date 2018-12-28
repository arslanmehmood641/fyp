import React, { Component } from "react";
import data from "../../readBookingData.json"; //import json file here
import { View, Text, Image, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import hallImg from "../../../../images/china_wall.jpg";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class ViewBookingsHistory extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true, //check if json data fetch online
      dataSource: [] //store an object of json data
    };
  }

  componentDidMount() {
    //set state value
    this.setState({
      isLoading: false, //already loading
      dataSource: data.info //write name of array which contains json data
    });
  }
  render() {
    //show waiting screen when json data is fetching
    if (this.state.isLoading) {
      return <View style={{ flex: 1, paddingTop: 20 }} />;
    }
    const { navigation } = this.props;
    const hall = navigation.getParam("Object");

    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginVertical: heightP("3%") }}>
          <Image style={styles.img} source={hallImg} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 5
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "100", color: "green" }}>
              {hall.hallName}
            </Text>
            <Text style={styles.txt}>{hall.hallAddress}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={hall.rating}
              starSize={15}
              fullStarColor="yellow"
            />
            <Text style={styles.txt}>{hall.guestLimit} guests</Text>
            <Text style={styles.txt}>{hall.pricePerHead} Rs/-(per head)</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cat: {
    backgroundColor: "#31708E",
    padding: 10,
    borderRadius: 70,
    marginRight: 15,
    marginBottom: 20,
    marginLeft: 30,
    width: "80%"
  },
  img: {
    width: widthP("95%"),
    height: heightP("20%"),
    borderColor: "#3C3C3C",
    borderWidth: 2,
    borderRadius: 10
  },
  txt: {
    fontSize: 18
  },
  info: {
    fontSize: 18,
    color: "white",
    borderRadius: 20,
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "center"
  }
});
