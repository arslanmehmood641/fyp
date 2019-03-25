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
class DetailPendingBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "Pending",
      bookingData: this.props.navigation.state.params.Object,
      type: "Hall",
      id: "",
      cid: ""
    };
  }
  ApprovedMessage() {
    //alert(this.state.type);
    var url;
    if (global.typeOfCompany === "Hall") {
      url =
        "https://eventhub-api.conveyor.cloud/api/Owner/ApprovePendingRequestHall?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid;
    } else if (global.typeOfCompany === "Media") {
      url =
        "https://eventhub-api.conveyor.cloud/api/Media/ApprovePendingRequestMedia?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid;
    } else if (global.typeOfCompany === "Caterer") {
      url =
        "https://eventhub-api.conveyor.cloud/api/Caterer/ApprovePendingRequestCaterer?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid;
    }

    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ data: res });
        if (this.state.data == 1) {
          alert("Thanks your request is approved");
        }
      });
  }
  DisApprovedMessage() {
    //alert(this.state.type);
    if (this.state.type === "Hall") {
      var url =
        "https://eventhub-api.conveyor.cloud/api/Owner/DisApprovePendingRequestHall?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid;
    } else if (this.state.type === "Media") {
      var url =
        "https://eventhub-api.conveyor.cloud/api/Owner/ApprovePendingRequestMedia?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid;
    } else if (this.state.type === "Caterer") {
      var url =
        "https://eventhub-api.conveyor.cloud/api/Owner/ApprovePendingRequestCaterer?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid;
    }

    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ data: res });
        if (this.state.data == 1) {
          alert("Thanks your request is approved");
        }
      });
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
          <Text style={styles.t1}>Packege Detail</Text>
          <PackegeDetail
            hall={this.state.bookingData}
            navigation={this.props.navigation}
            userType={this.state.typeOfCompany}
          />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.To1}
              onPress={this.ApprovedMessage.bind(this)}
            >
              <Text style={styles.t2}> Approve </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.To2}
              onPress={this.DisApprovedMessage.bind(this)}
            >
              <Text style={styles.t2}> Dis-Approve </Text>
            </TouchableOpacity>
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
    marginLeft: wp("8%")
  },
  To2: {
    width: wp("40%"),
    height: hp("8%"),
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#339933",
    justifyContent: "center",
    marginTop: hp("2%"),
    marginLeft: wp("5%")
  },
  t2: {
    color: "#ffffff",
    fontWeight: "800",
    marginLeft: wp("9%"),
    fontSize: 16
  }
});
export default withNavigation(DetailPendingBooking);
