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

export default class OneCompletedBookingOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hall1: "",
      type: ""
    };
  }
  Goto(nav, hall) {
    // alert(type);

    //alert(this.state.type);
    if (this.state.type == "Completed") {
      nav.navigate("Completed Booking", {
        Object: this.state.hall1
      });
    } else if (this.state.type == "Continue Owner") {
      nav.navigate("Continue Booking", {
        Object: this.state.hall1
      });
    } else if (this.state.type == "Pending") {
      nav.navigate("Pending Booking", {
        Object: this.state.hall1
      });
    } else if (this.state.type == "PendingCustomer") {
      nav.navigate("Customer Pending Booking", {
        Object: this.state.hall1
      });
    } else if (this.state.type == "ContinueCustomer") {
      nav.navigate("Customer Continue Booking", {
        Object: this.state.hall1
      });
    } else if (this.state.type == "CompletedCustomer") {
      nav.navigate("Customer Completed Booking", {
        Object: this.state.hall1
      });
    }
  }
  render() {
    const nav = this.props.navigation;
    this.state.type = this.props.status;
    let hall = this.props.hall;
    this.state.hall1 = hall;

    return (
      <TouchableOpacity onPress={() => this.Goto(nav, hall)}>
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
                    marginLeft: wp("7%")
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
                    marginLeft: wp("5%")
                  }}
                >
                  {hall.eventDate}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "900",
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
                  {hall.userEmail}
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
