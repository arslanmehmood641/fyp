import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ImageBackground
} from "react-native";
import bgh from "../../../../images/menu.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
import Overlay from "react-native-modal-overlay";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisibility: false,
      menuName: "",
      Drons: "",
      Albums: "",
      Price: ""
    };
  }
  render() {
    const nav = this.props.navigation;
    //const type = this.props.obj;
    let media = this.props.media;
    //alert(media.name);
    return (
      <View>
        <Overlay
          visible={this.state.overlayVisibility}
          onClose={() => {
            this.setState({ overlayVisibility: false });
          }}
          childrenWrapperStyle={{
            height: 500,
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
              height: 500,
              width: 355
            }}
          >
            <View
              style={{
                // alignItems: "center",

                fontColour: "#ffffff"
              }}
            >
              <Text style={styles.menuT}>{this.state.menuName}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>No of Cams:</Text>
                <Text style={styles.t2}>{this.state.Cams}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>No of Drones</Text>
                <Text style={styles.t2}>{this.state.Drons}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>Albums</Text>
                <Text style={styles.t2}>{this.state.Albums}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>Price</Text>
                <Text style={styles.t2}>{this.state.Price}</Text>
              </View>
            </View>
          </ImageBackground>
        </Overlay>
        <Text style={styles.packegesText}>Packages</Text>
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
          <TouchableOpacity
            style={styles.itemDesign}
            onPress={() => {
              this.setState({ overlayVisibility: true });
              this.state.menuName = "One Day packege";
              this.state.Drone = media.DroneOne;
              this.state.Cams = media.CamsOne;
              this.state.Price = media.PriceOne;
              this.state.Albums = media.AlbumOne;
            }}
          >
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>One Day Packege</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemDesign}
            onPress={() => {
              this.setState({ overlayVisibility: true });
              this.state.menuName = "One Day packege";
              this.state.Drone = media.DroneTwo;
              this.state.Cams = media.CamsTwo;
              this.state.Price = media.PriceTwo;
              this.state.Albums = media.AlbumTwo;
            }}
          >
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>Two Day Package</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemDesign}
            onPress={() => {
              this.setState({ overlayVisibility: true });
              this.state.menuName = "One Day packege";
              this.state.Drone = media.DroneThree;
              this.state.Cams = media.CamsThree;
              this.state.Price = media.PriceThree;
              this.state.Albums = media.AlbumThree;
            }}
          >
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>Three Day Packege</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuText: {
    fontSize: 25
  },
  container: {
    marginTop: hp("0.5%"),
    height: hp("20%")
  },
  itemDesign: {
    borderColor: "#2f8c17",
    borderWidth: wp("0.5%"),
    borderRadius: 5,
    marginTop: wp("1%"),
    flexDirection: "row",
    marginHorizontal: wp("1%")
  },
  packegesText: {
    color: "#00b300",
    marginTop: hp("0.5%"),
    width: wp("100%"),
    paddingLeft: wp("2%"),
    backgroundColor: "#ffffff",
    fontSize: hp("4%")
  },
  t1: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: hp("3%"),
    fontWeight: "900",
    marginLeft: wp("14%")
  },
  t2: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: hp("3%"),
    fontWeight: "bold",
    marginLeft: wp("14%")
  },
  menuT: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
    paddingTop: hp("10%"),

    marginLeft: wp("25%")
  }
});
