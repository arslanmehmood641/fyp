import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import PasswordField from "../../small_components/password_field";
import HomeLogo from "../../small_components/home_logo";
import TouchButton from "../../small_components/touch_button";
import InputField from "../../small_components/input_field";

import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";
import { View } from "native-base";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      nav: "",
      user: ""
    };
  }
  submit() {
    if (this.state.email != '' && this.state.password != '') {
      let login = {}
      login.email = this.state.email;
      login.password = this.state.password;
      var url = 'https://eventhub-api.conveyor.cloud/api/User/Login'
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(login),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
        .catch(error => console.error('Error :', error))
        .then(res => {
          this.setState({ user: res });
          console.warn(this.state.user.U_id);
          if (this.state.user.U_id > 0 && this.state.user.U_type == 1) {
            this.props.navigation.navigate("Owner Settings", { user: this.state.user });
          }
          else if (this.state.user.U_id > 0 && this.state.user.U_type == 2) {
            this.props.navigation.navigate("Customer Settings", { user: this.state.user });
          }
        });
      console.warn(this.state.user.U_id);

    }
  }

  checkMail(nav) {
    //const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //var flag = reg.test(this.state.email);
    if (this.state.email === "") {
      alert("user name cant be empty");
    } else {
      if (this.state.password === "") alert("Password Field Is Empty");
      else this.submit();
    }
  }

  handleEmailInput = text => {
    this.setState({
      email: text
    });
  };

  handlePswdInput = text => {
    this.setState({
      password: text
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <View style={styles.backgroundContainer}>
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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    height: heightP("87.4%"),
    alignItems: "center"
  }
});
