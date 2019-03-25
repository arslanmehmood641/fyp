import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
//import OneHall from "../../small_components/OneCompletedBookingOwner";
import OneHall from "../../small_components/onehall";
import OneMedia from "../../small_components/OneMedia";
import OneCaterer from "../../small_components/OneCaterer";
import { Container, Content } from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class CustomerPendingBookings extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true, //check if json data fetch online
      HallData: [], //store an object of json data
      MediaData: [],
      CateringData: []
    };
  }
  HallApi() {}
  MediaApi() {}
  CateringApi() {
    var url = "https://eventhub-api.conveyor.cloud/api/Hall/GetHalls";
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ CateringData: res });
        // console.warn(this.state.data);
      });
  }
  componentDidMount() {
    var url = "https://eventhub-api.conveyor.cloud/api/Hall/GetHalls";
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ HallData: res });
        // console.warn(this.state.data);
      });

    //______________________________
    var url = "https://eventhub-api.conveyor.cloud/api/Media/GetMedia";
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ MediaData: res });
        // console.warn(this.state.data);
      });
    //_________________________

    var url = "https://eventhub-api.conveyor.cloud/api/Caterer/GetCaterer";
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ CateringData: res });
        // console.warn(this.state.data);
      });
  }
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text style={styles.t1}>Find your Dream Hall</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.HallData}
            // data={data.info}
            renderItem={hall => (
              <OneHall
                hall={hall.item}
                navigation={this.props.navigation}
                userType="CustomerPending"
              />
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />

          <View>
            <Text style={styles.t1}>Find your Dream Camera Man</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.MediaData}
            // data={data.info}
            renderItem={media => (
              <OneMedia
                media={media.item}
                navigation={this.props.navigation}
                userType="CustomerPending"
              />
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />
          <View>
            <Text style={styles.t1}>Hire you Favourite Catring Compay</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.CateringData}
            //data={data.info}
            renderItem={caterer => (
              <OneCaterer
                caterer={caterer.item}
                navigation={this.props.navigation}
                userType="CustomerPending"
              />
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  t1: {
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    textAlign: "center",
    backgroundColor: "green",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    marginTop: hp("2%"),
    fontWeight: "800",
    fontSize: 20,
    color: "#FFFFFF"
  }
});
