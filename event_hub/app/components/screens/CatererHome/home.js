import React, { Component } from "react";
import Slide from "./CatererSlider";
import Map from "./map";
//import Pack from "./CatererPackegess";
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
import UntouchableButton from "../../small_components/untouchable_btn";
import TouchButton from "../../small_components/touch_button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "check",
      Aname: "ac",
      caterer: this.props.navigation.state.params.Object
    };
  }

  render() {
    const nav = this.props.navigation;
    //const type = this.props.obj;
    //let hall = this.props.obj;
    //console.warn(this.state.hall);
    return (
      <Container>
        <Content>
          <Slide />
          <Map
            caterer={this.state.caterer}
            navigation={this.props.navigation}
          />

          <View style={{ alignItems: "center" }}>
            <TouchButton
              On_Press={() => {
                this.props.navigation.navigate("Form2", {
                  Object: this.state.caterer
                });
              }}
              InText="CHECK AVAILABILITY"
            />
          </View>
          <View>
            <Text style={styles.heading}>Guest Love It Because</Text>
            <View style={{ paddingLeft: 30 }}>
              <UntouchableButton InText="Drone Cam" IconName="music-note" />
              <UntouchableButton InText="Hd Cam" IconName="music-note" />
              <UntouchableButton InText="Albums" IconName="music-note" />
              <UntouchableButton InText="Film Graphy" IconName="music-note" />
            </View>
          </View>
        </Content>
      </Container>
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

export default withNavigation(HomeScreen);
