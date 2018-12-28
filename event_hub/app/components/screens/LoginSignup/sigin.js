import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import PasswordField from "../../small_components/password_field";
import HomeLogo from "../../small_components/home_logo";
import TouchButton from "../../small_components/touch_button";
import InputField from "../../small_components/input_field";
import Toast from "react-native-simple-toast";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pswd: "",
      nav: "",
      returnObj: ""
    };
  }

  checkMail(nav) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = reg.test(this.state.email);
    const password = this.state.pswd;
    let user = {};
    user.name = this.state.email;
    user.password = this.state.pswd;
    if (flag) {
      if (password === "") {
        alert("Password Field Is Empty");
        return;
      }
      var url = "https://eventhub1.conveyor.cloud/api/User/SignIn";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json())
        .catch(error => console.warn("Error :", error))
        .then(res => {
          Toast.show(res, Toast.SHORT);
          this.setState({ returnObj: res });
          const temp = this.state.returnObj;
          if (temp === "Owner") nav("Owner Settings");
          else if (temp === "Customer") nav("Customer Settings");
          else if (temp === "Admin") nav("Home Screen");
        });
    } else alert("Wrong Email Pattern");
  }

  handleEmailInput = text => {
    this.setState({
      email: text
    });
  };

  handlePswdInput = text => {
    this.setState({
      pswd: text
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.backgroundContainer}>
        <HomeLogo />
        {/* Username */}
        <InputField
          iconName="person"
          keyType="email-address"
          placeHolder="Email or Username"
          On_Change_Text={this.handleEmailInput}
        />
        {/* Password */}
        <PasswordField
          placeHolder="Password"
          On_Change_Text={this.handlePswdInput}
        />
        {/* Login Button */}

        <TouchButton
          On_Press={() => this.checkMail.bind(this)(navigate)}
          InText="Login"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    height: heightP("85.4%"),
    alignItems: "center"
  },
  cent: {
    alignItems: "center"
  }
});
