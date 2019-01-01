import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const Slider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width
  }
};

export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesSlider: [
        require("../../../../images/Media/1.jpg"),
        require("../../../../images/Media/2.jpg"),
        require("../../../../images/Media/3.jpg")
      ]
    };
  }
  render() {
    return (
      <View>
        <Swiper autoplay height={210}>
          {this.state.imagesSlider.map((item, i) => (
            <Slider uri={item} key={i} />
          ))}
        </Swiper>
      </View>
    );
  }
}
