import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  FlatList
} from "react-native";
import data from "../../readBookingData.json"; //import json file here
import TouchButton from "../../small_components/touch_button";

export default class Book extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true, //check if json data fetch online
      dataSource: [] //store an object of json data
    };
  }
  renderItem = ({ item }) => {
    return (
      <View>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: item.image }}
        />
        <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
          <Text style={styles.info}>
            {item.name}
            {"\n"}
            {item.noOfGuests} guests{"\n"}
            {item.email}
            {"\n"}
            {item.price}
            {"\n"}
            {item.area}
            {"\n"}
            {item.desc}
            {"\n"}
            {item.book_type}
            {"\n"}
            {item.funcTime} shift
          </Text>
          <View style={{alignItems:'center'}}>
            <TouchButton On_Press={this._approvedMessage} InText="Approve" />
            <TouchButton
              On_Press={this._disapprovedMessage}
              InText="Disapprove"
            />
          </View>
        </View>
      </View>
    );
  };
  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
    );
  };
  _approvedMessage() {
    Alert.alert("Booking has approved");
  }
  _disapprovedMessage() {
    Alert.alert("Booking has disapproved");
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
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003153",
    flex: 1
  },
  cat: {
    backgroundColor: "#31708E",
    padding: 10,
    borderRadius: 70,
    marginRight: 15,
    marginBottom: 20,
    marginLeft: 30,
    width: "80%"
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
