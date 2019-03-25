import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
import { Container, Content } from "native-base";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import InputField from "../../small_components/input_field";
import CustomerDetail from "../../small_components/CustomerDetail";
import BookingDetail from "../../small_components/BookingDetail";
import PackegeDetail from "../../small_components/PackegeDetail";
import Review from "../../small_components/Review";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class DetailCompletedBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: this.props.navigation.state.params.Object
    };
  }

  render() {
    // alert(this.state.bookingData.userName);
    return (
      <ScrollView>
        <View>
          <Text style={styles.t1}>Customer Detail</Text>
          <CustomerDetail
            hall={this.state.bookingData}
            navigation={this.props.navigation}
            userType={this.state.typeOfCompany}
          />
          <Text style={styles.t1}>Paacke Detail</Text>
          <PackegeDetail
            hall={this.state.bookingData}
            navigation={this.props.navigation}
            userType={this.state.typeOfCompany}
          />
          <Text style={styles.t1}>Feedbacks</Text>
          <Review
            hall={this.state.bookingData}
            navigation={this.props.navigation}
            userType={this.state.typeOfCompany}
          />
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
  }
});
export default withNavigation(DetailCompletedBooking);
