import React, { Component } from "react";
import { View, StyleSheet, TextInput, Picker, ScrollView } from "react-native";

import HomeLogo from "../../small_components/home_logo";
import PasswordField from "../../small_components/password_field";
import TouchButton from "../../small_components/touch_button";
import GenericPicker from "../../small_components/generic_picker";
import InputField from "../../small_components/input_field";
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP
} from "react-native-responsive-screen";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      language: 12,
      email: "",
      pswd: "",
      c_pswd: "",
      Utype: ""
    };
  }

  checkMail(nav) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = reg.test(this.state.email);
    if (!flag) {
      alert("Wrong Email Pattern");
    } else {
      const check = this.pswdMismatch();
      if (check === 1) alert("Password Mismatch");
      else if (check === 2) alert("Password Field Is Empty");
    }
  }

  pswdMismatch() {
    const p1 = this.state.pswd,
      p2 = this.state.c_pswd;
    if (p1 !== p2) return 1;
    if (p1 === "" || p2 == "") return 2;
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

  handleConPswdInput = text => {
    this.setState({
      c_pswd: text
    });
  };
  submit() {
    if (this.state.email != '') {
      let user = {}
      user.U_id = 0;
      user.UserName = this.state.email;
      user.Password = this.state.pswd;
      user.U_type = this.state.Utype;
      var url = 'https://eventhub-api.conveyor.cloud/api/User/RegisterUsers'
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
        .catch(error => console.error('Error :', error))
        .then(res => console.warn('Success :', this.state.Utype));

      this.props.navigation.navigate("Congratulations")

    }
    else {
      console.warn("Not Submit")
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <View style={styles.backgroundContainer}>
          <HomeLogo />
          {/* Username Field */}
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
          {/* Confirm Password */}
          <PasswordField
            placeHolder="Confirm Password"
            On_Change_Text={this.handleConPswdInput}
          />
          {/* User Type Picker */}
          <GenericPicker
            iconName="settings"
            selected_Value={this.state.Utype}
            pickerVals={[
              ["", "Type Of User"],
              ["1", "Owner"],
              ["2", "Customer"]
            ]}
            on_Value_Change={(itemValue, itemIndex) =>
              this.setState({ Utype: itemValue })
            }
          />
          {/* Login Button */}
          <TouchButton
            On_Press={() => this.submit()}
            InText="Sign Up"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pswdField: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    width: widthP("85%"),
    textAlign: "left",
    height: heightP("6%"),
    borderRadius: 25,
    fontSize: 16
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  backgroundContainer: {
    height: heightP("87.4%"),
    alignItems: "center"
  },
  input: {
    width: widthP("68%"),
    paddingLeft: widthP("2%"),
    color: "white"
  },
  userIcon: {
    position: "relative",
    paddingTop: heightP("1%"),
    paddingLeft: widthP("2%")
  },
  pswdEye: {
    position: "relative",
    paddingTop: heightP("1%")
  },
  loginBtn: {
    width: widthP("60%"),
    height: heightP("6%"),
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: "center"
  },
  txt: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center"
  },
  picker: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row"
  },
  pickerStyle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    height: heightP("6%"),
    width: widthP("76%"),
    paddingLeft: widthP("2%"),
    position: "relative"
  }
});