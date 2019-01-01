import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class Package extends Component {
  render() {
    return (
      <View>
        <Text style={styles.packegesText}>Packages</Text>
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
          <TouchableOpacity style={styles.itemDesign}>
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>One Day Packege</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemDesign}>
            <Icon name="home" size={25} style={{ color: "#ffcc00" }} />
            <Text style={styles.menuText}>Two Day Package</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemDesign}>
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
    borderColor: "#003300",
    borderWidth: wp("1%"),
    borderRadius: 5,
    marginTop: wp("1%"),
    flexDirection: "row",
    marginHorizontal: wp("5%")
  },
  packegesText: {
    color: "#00b300",
    marginTop: hp("0.5%"),
    width: wp("100%"),
    paddingLeft: wp("2%"),
    backgroundColor: "#ffffff",
    fontSize: hp("4%")
  }
});
