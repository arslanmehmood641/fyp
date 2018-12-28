import React, { Component } from "react";
import { Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Swiper from "react-native-swiper";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesSlider: [
        require("../../../../images/1.jpg"),
        require("../../../../images/2.jpg"),
        require("../../../../images/3.jpg")
      ]
    };
  }
  render() {
    return (
      <Swiper autoplay>
        {this.state.imagesSlider.map((item, i) => (
          <Image style={styles.image} source={item} key={i} />
        ))}
      </Swiper>
    );
  }
}

const styles = {
  image: {
    width: wp("100%"),
    height: hp("35%")
  }
};
