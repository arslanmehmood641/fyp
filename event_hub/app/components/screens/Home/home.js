import React, { Component } from "react";

import Slide from "./Slider";
import Map from "./map";
import Pack from "./packegess";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from "react-native";
import { Container, Content } from "native-base";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "check",
      Aname: "ac"
    };
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Content>
            <Slide />
            <Map />
            <Pack />
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                  this.props.navigation.navigate("Form");
                }}
              >
                <Text style={styles.searchButton}>CHECK AVAILABILITY</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.heading}>Guest Love It Because</Text>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Icon name="music-note" size={25} />
                <Text>Music System</Text>
              </TouchableOpacity>
            </View>
          </Content>
        </Container>
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

export default withNavigation(HomeScreen);
