import PendingBookings from "./customer_pending_bookings";
import Profile from "../OwnerProfile/index";
import Index from "./index";
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
    Home: {
      screen: PendingBookings,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="assignment-ind"
            size={20}
            color={tintColor}
            style={{ marginTop: heightP("2%") }}
          />
        )
      }
    },
    Bookings: {
      screen: Index,
      navigationOptions: {
        tabBarLabel: "Bookings",
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
      screen: Profile,
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

    /* "Find Media": {
      screen: MediaHome,
      navigationOptions: {
        tabBarLabel: "Find Media",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="assignment-ind"
            size={20}
            color={tintColor}
            style={{ marginTop: heightP("2%") }}
          />
        )
      }
   },*/
    /*"Find Caterer": {
      screen: CatererHome,
      navigationOptions: {
        tabBarLabel: "Find Caterer",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="assignment-ind"
            size={20}
            color={tintColor}
            style={{ marginTop: heightP("2%") }}
          />
        )
      }
    }
  },*/
  },
  {
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "green",
      inactiveTintColor: "#000000",
      tabStyle: {
        backgroundColor: "#ffffff",
        height: heightP("7%"),
        elevation: 3
      }
    }
  }
);
export default CustomerSettings;
