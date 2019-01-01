import PendingBookings from "./customer_pending_bookings";
import MediaHome from "./media_home";
import CatererHome from "./caterer_home";
import Profile from "./profile";
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
const CustomerSettings = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" color={tintColor} size={25} />
        )
      }
    },
    "Find Hall": {
      screen: PendingBookings,
      navigationOptions: {
        tabBarLabel: "Find Hall",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="assignment-ind" size={25} color={tintColor} />
        )
      }
    },
    "Find Media": {
      screen: MediaHome,
      navigationOptions: {
        tabBarLabel: "Find Media",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="assignment-ind" size={25} color={tintColor} />
        )
      }
    },
    "Find Caterer": {
      screen: CatererHome,
      navigationOptions: {
        tabBarLabel: "Find Caterer",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="assignment-ind" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Profile",
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "red",
      inactiveTintColor: "gray",
      tabStyle: {
        backgroundColor: "cyan",
        height: heightP("11%"),
        elevation: 4
      }
    }
  }
);

export default CustomerSettings;
