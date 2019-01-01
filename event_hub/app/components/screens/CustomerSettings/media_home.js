import React, { Component } from "react";
import { View, FlatList } from "react-native";

import OneMedia from "../../small_components/OneMedia";
//const data = require("../../data.json");

export default class MediaHome extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true, //check if json data fetch online
      data: [] //store an object of json data
    };
  }

  componentDidMount() {
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
        this.setState({ data: res });
        console.warn(this.state.data);
      });
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={media => (
            <OneMedia
              media={media.item}
              navigation={this.props.navigation}
              userType="MediaHome"
            />
          )}
          keyExtractor={(name, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#cccccc" }} />
          )}
        />
      </View>
    );
  }
}
