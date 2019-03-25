import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ImageBackground
} from "react-native";
import Overlay from "react-native-modal-overlay";
import Icon from "react-native-vector-icons/MaterialIcons";
import bgh from "../../../../images/menu.jpg";
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
      hall1: "",
      mainDish: "",
      riceDish: "",
      sweetDish: "",
      Starter: "",
      price: ""
    };
  }
  render() {
    const nav = this.props.navigation;
    //const type = this.props.obj;
    let hall = this.props.hall1;
    return (
      <View>
        <Text style={styles.packegesText}>Packages</Text>
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
                <Text style={styles.t1}>Main Dish:</Text>
                <Text style={styles.t2}>{this.state.mainDish}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>Rice Dish</Text>
                <Text style={styles.t2}>{this.state.riceDish}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>Sweet Dish</Text>
                <Text style={styles.t2}>{this.state.sweetDish}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>Starter</Text>
                <Text style={styles.t2}>{this.state.Starter}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.t1}>Per Head Price</Text>
                <Text style={styles.t2}>{this.state.price}</Text>
              </View>
            </View>
          </ImageBackground>
        </Overlay>
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
          <TouchableOpacity
            style={styles.itemDesign}
            onPress={() => {
              this.setState({ overlayVisibility: true });
              this.state.menuName = "Chicken Menue";
              this.state.mainDish = hall.chicken_main;
              this.state.riceDish = hall.chicken_rice;
              this.state.sweetDish = hall.chicken_sweet;
              this.state.Starter = hall.chicken_starter;
              this.state.price = hall.chickenPrice;
            }}
          >
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>Chicken Menue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemDesign}
            onPress={() => {
              this.setState({ overlayVisibility: true });
              this.state.menuName = "Mutton Menue";
              this.state.mainDish = hall.mutton_main;
              this.state.riceDish = hall.mutton_rice;
              this.state.sweetDish = hall.mutton_sweet;
              this.state.Starter = hall.mutton_starter;
              this.state.price = hall.muttonPrice;
            }}
          >
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>Mutton Menue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemDesign}
            onPress={() => {
              this.setState({ overlayVisibility: true });
              this.state.menuName = "Beef Menue";
              this.state.mainDish = hall.beef_main;
              this.state.riceDish = hall.beef_main_rice;
              this.state.sweetDish = hall.beef_sweet;
              this.state.Starter = hall.beef_main_starter;
              this.state.price = hall.beefPrice;
            }}
          >
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>Beef Menue</Text>
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
