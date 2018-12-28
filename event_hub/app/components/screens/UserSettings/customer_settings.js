import PendingBookings from "./customer_pending_bookings";
import BookingsHistory from "./customer_bookings_history";
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
    "Pending Bookings": {
      screen: PendingBookings,
      navigationOptions: {
        tabBarLabel: "Pending Bookings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="assignment-ind" size={25} color={tintColor} />
        )
      }
    },
    "Bookings History": {
      screen: BookingsHistory,
      navigationOptions: {
        tabBarLabel: "Bookings History",
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
        elevation: 3
      }
    }
  }
);

export default createAppContainer(CustomerSettings);
