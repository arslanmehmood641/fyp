import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput
} from "react-native";
import StarRating from "react-native-star-rating";
import { withNavigation } from "react-navigation";
import Overlay from "react-native-modal-overlay";
import CustomerDetail from "../../small_components/CustomerDetail";
import BookingDetail from "../../small_components/BookingDetail";
import PackegeDetail from "../../small_components/PackegeDetail";
import Review from "../../small_components/Review";
import bgh from "../../../../images/ratingbg.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class DetailContinueBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: this.props.navigation.state.params.Object,
      status: "Continue",
      overlayVisibility: false,
      starCount: 0,
      text: "",
      type: "Hall",
      id: "",
      cid: ""
    };
  }
  CompletedMessage() {
    //alert("enter");
    if (this.state.type === "Hall") {
      var url =
        "https://eventhub-api.conveyor.cloud/api/Owner/CompletedRequestHall?id=" +
        this.state.id +
        "&cid=" +
        this.state.cid +
        "&starCount=" +
        this.state.starCount +
        "&text=" +
        this.state.text;
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
        this.state.cid +
        "&starCount=" +
        this.state.starCount +
        "&text=" +
        this.state.text;
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
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
    //alert(this.state.rating);
  }
  render() {
    this.state.id = this.state.bookingData.b_id;
    this.state.cid = this.state.bookingData.companyID;
    return (
      <View>
        <Overlay
          visible={this.state.overlayVisibility}
          onClose={() => {
            this.setState({ overlayVisibility: false });
          }}
          childrenWrapperStyle={{
            height: 300,
            width: 355,
            backgroundColor: "rgba(0, 0, 0)"
          }}
          animationType="flipInX"
          containerStyle={{
            // backgroundColor: "rgba(0, 0, 0, 0.4)",
            alignItems: "center"
          }}
          closeOnTouchOutside
        >
          <ImageBackground
            source={bgh}
            style={{
              height: 300,
              width: 355
            }}
          >
            <View
              style={{
                // alignItems: "center",

                fontColour: "#ffffff"
              }}
            >
              <Text style={styles.menuT}>Thank you! submit your opinion</Text>
              <TextInput
                style={{
                  height: hp("10%"),
                  borderColor: "gray",
                  borderWidth: 1,
                  width: wp("70%"),
                  marginLeft: wp("5")
                }}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
              <Text style={styles.menuT1}>Rate user</Text>
              <StarRating
                style={styles.rating}
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                starSize={30}
                containerStyle={{
                  marginLeft: wp("10%"),
                  width: wp("35%")
                  // height: hp("%")
                }}
                fullStarColor={"green"}
                selectedStar={rating => this.onStarRatingPress(rating)}
              />

              <TouchableOpacity
                style={styles.To1}
                onPress={this.CompletedMessage.bind(this)}
              >
                <Text style={styles.t2}> submit </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Overlay>
        <ScrollView>
          <View>
            <Text style={styles.t1}>Customer Detail</Text>
            <CustomerDetail
              hall={this.state.bookingData}
              navigation={this.props.navigation}
              status={this.state.status}
            />
            <Text style={styles.t1}>Booking Detail</Text>
            <BookingDetail
              hall={this.state.hall}
              navigation={this.props.navigation}
              userType={this.state.typeOfCompany}
            />

            <Text style={styles.t1}>Feedbacks</Text>
            <Review
              hall={this.state.hall}
              navigation={this.props.navigation}
              userType={this.state.typeOfCompany}
            />
            <TouchableOpacity
              style={styles.To2}
              onPress={() => {
                this.setState({ overlayVisibility: true });
              }}
            >
              <Text style={styles.t2}> Mark as completed </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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
  To2: {
    width: wp("35%"),
    height: hp("7%"),
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#339933",
    justifyContent: "center",
    marginTop: hp("1%"),
    marginLeft: wp("2%")
  },
  menuT: {
    color: "green",
    fontSize: 24,
    fontWeight: "900",
    paddingTop: hp("7%"),

    marginLeft: wp("1%")
  },
  menuT1: {
    color: "green",
    fontSize: 24,
    fontWeight: "900",
    paddingTop: hp("1%"),
    marginLeft: wp("1%")
  },
  To1: {
    width: wp("45%"),
    height: hp("7%"),
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#339933",
    justifyContent: "center",
    marginTop: hp("1%"),
    marginLeft: wp("25%")
  },
  t2: {
    color: "#ffffff",
    fontWeight: "800",
    marginLeft: wp("12%"),
    fontSize: 16
  }
});
export default withNavigation(DetailContinueBooking);
