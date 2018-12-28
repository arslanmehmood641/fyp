import React, { Component } from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  YellowBox
} from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

export default class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "No Of Guests"
    };
  }

  render() {
    const MenuItems = this.props.listItems;
    return (
      <MenuProvider>
        <Menu
          name="Best"
          onSelect={value => {
            this.setState({ val: value });
          }}
        >
          <MenuTrigger>
            <Text style={{ margin: 20 }}>{this.state.val}</Text>
          </MenuTrigger>

          <MenuOptions>
            {MenuItems.map(item => (
              <MenuOption value={item[0]}>
                <Text>{item[0]}</Text>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
  }
}
