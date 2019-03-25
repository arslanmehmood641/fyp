import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import CustomerDetail from "../../small_components/CustomerDetail";
import BookingDetail from "../../small_components/BookingDetail";
import PackegeDetail from "../../small_components/PackegeDetail";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class DetailPendingBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "Pending",
      bookingData: this.props.navigation.state.params.Object,
      type: "Hall",
      id: "",
      cid: "",
      data: ""
    };
  }
  render() {
    const nav = this.props.navigation;
    this.state.id = this.state.bookingData.b_id;
    this.state.cid = this.state.bookingData.companyID;
    return (
      <ScrollView>
        <View>
          <Text style={styles.t1}>Customer Detail</Text>
          <CustomerDetail
            hall={this.state.bookingData}
            navigation={this.props.navigation}
          />
          <Text style={styles.t1}>Booking Detail</Text>
          <BookingDetail
            hall={this.state.bookingData}
            navigation={this.props.navigation}
            userType={this.state.typeOfCompany}
          />

          <View style={styles.To1}>
            <Text style={styles.t2}>Waiting for Response</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  btnContainer: {
    width: 330,
    height: 50,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    right: 10
  },
  t1: {
    marginLeft: wp("35%"),
    fontSize: 18,
    fontWeight: "800",
    width: wp("50%"),
    color: "#339933",
    marginTop: hp("1%")
  },
  justView: {
    width: 330,
    height: 50,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    flexDirection: "row"
  },
  searchButton: {
    textAlign: "center",
    color: "white"
  },
  heading: {
    color: "#00b300",
    marginTop: hp("0.5%"),
    width: wp("100%"),
    paddingLeft: wp("2%"),
    backgroundColor: "#ffffff",
    fontSize: hp("4%")
  },
  To1: {
    width: wp("40%"),
    height: hp("8%"),
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#339933",
    justifyContent: "center",
    marginTop: hp("2%"),
    marginLeft: wp("20%")
  },
  To2: {
    width: wp("80%"),
    height: hp("8%"),
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#339933",
    justifyContent: "center",
    marginTop: hp("2%"),
    marginLeft: wp("10%")
  },
  t2: {
    color: "#ffffff",
    fontWeight: "800",
    marginLeft: wp("9%"),
    fontSize: 16
  }
});
export default withNavigation(DetailPendingBooking);
