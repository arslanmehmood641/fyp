import SignIn from "./sigin";
import SignUp from "./signup";

import React from "react";

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import Icon2 from "react-native-vector-icons/Octicons";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

const HomePage = createMaterialTopTabNavigator(
  {
    "Sign In": {
      screen: SignIn,
      navigationOptions: {
        tabBarLabel: "Sign In",
        tabBarIcon: ({ tintColor }) => (
          <Icon2 name="sign-in" color={tintColor} size={25} />
        )
      }
    },
    "Sign Up": {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: "Sign Up",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="assignment-ind" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Sign In",
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "red",
      inactiveTintColor: "gray",
      tabStyle: {
        backgroundColor: "cyan",
        height: heightP("10%"),
        overflow: "scroll"
      }
    }
  }
);

export default HomePage;
