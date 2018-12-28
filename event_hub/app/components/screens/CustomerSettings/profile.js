import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import bgImg from "../../../../images/bgImg.jpg";
import coverImg from "../../../../images/1.jpg";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";
export default class Profile extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ImageBackground
          source={coverImg}
          style={{
            height: 200,
            width: widthP("100%"),
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={bgImg}
            style={{
              height: 150,
              width: 150,
              borderColor: "#D9D8E2",
              borderWidth: 5,
              borderRadius: 150
            }}
          />
          <Text style={styles.name}>Tassaduq Hussain</Text>
        </ImageBackground>
        <View style={{ alignItems: "baseline" }}>
          <Text style={styles.txt}>Phone : 123</Text>
          <Text>Address : Flan Flan</Text>
          <Text>Email : Tassaduq@g.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 15
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",


  }
});
