import Registration from "../OwnerRegistration/registration_form";
import PendingBookings from "./owner_pending_bookings";
import BookingsHistory from "./owner_bookings_history";
import OwnerIndex from "./Index";
import OwnerProfile from "../OwnerProfile/index";
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

const OwnerSettings = createMaterialTopTabNavigator(
  {
    Home: {
      screen: OwnerIndex,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            color={tintColor}
            size={20}
            style={{ marginTop: heightP("2%") }}
          />
        )
      }
    },
    Registration: {
      screen: Registration,
      navigationOptions: {
        tabBarLabel: "Registration",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="settings"
            color={tintColor}
            size={20}
            style={{ marginTop: heightP("2%") }}
          />
        )
      }
    },
    Profile: {
      screen: OwnerProfile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="person"
            color={tintColor}
            size={20}
            style={{ marginTop: heightP("2%") }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "green",
      inactiveTintColor: "#000000",
      tabStyle: {
        backgroundColor: "#FFFFFF",
        height: heightP("7%"),
        elevation: 3
      }
    }
  }
);

export default OwnerSettings;
