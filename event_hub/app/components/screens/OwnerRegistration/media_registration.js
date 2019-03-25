import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, ScrollView } from "react-native";
import TouchButton from "../../small_components/touch_button";
import GenericPicker from "../../small_components/generic_picker";
import InputField from "../../small_components/input_field";
import Toast from "react-native-simple-toast";
import SadaPicker from "../../small_components/sada_picker";
import { CheckBox } from "react-native-elements";
import {
  widthPercentageToDP as wid,
  heightPercentageToDP as hig
} from "react-native-responsive-screen";

export default class MediaRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droneCamera: 0,
      photoGraphy: 0,
      hdCam: 0,
      filmGraphy: 0,
      albums: 0,
      groupPhotos: 0,
      itemName: "",
      perDayPrice: 0,
      noOfCams: 0,
      DroneOne: "",
      AlbumOne: "",
      CamsOne: "",
      PriceOne: "",
      DroneTwo: "",
      AlbumTwo: "",
      CamsTwo: "",
      PriceTwo: "",
      DroneThree: "",
      AlbumThree: "",
      CamsThree: "",
      PriceThree: ""
    };
  }

  handlePerDayPrice = txt => {
    this.setState({
      perDayPrice: txt
    });
  };
  handleCamsOne = txt => {
    this.setState({
      CamsOne: txt
    });
  };
  handlePriceOne = txt => {
    this.setState({
      PriceOne: txt
    });
  };
  handleCamsTwo = txt => {
    this.setState({
      CamsTwo: txt
    });
  };
  handlePriceTwo = txt => {
    this.setState({
      PriceTwo: txt
    });
  };
  handleCamsThree = txt => {
    this.setState({
      CamsThree: txt
    });
  };
  handlePriceThree = txt => {
    this.setState({
      PriceThree: txt
    });
  };
  decide(nav, genericCompany) {
    let mediaCompany = {};
    mediaCompany.companyID = genericCompany.companyID;
    mediaCompany.name = genericCompany.name;
    mediaCompany.email = genericCompany.email;
    mediaCompany.startDate = genericCompany.startDate;
    mediaCompany.totalTime = genericCompany.totalTime;
    mediaCompany.streetNo = genericCompany.streetNo;
    mediaCompany.houseNo = genericCompany.houseNo;
    mediaCompany.townName = genericCompany.townName;
    mediaCompany.city = genericCompany.city;
    mediaCompany.country = genericCompany.country;
    mediaCompany.droneCamera = this.state.droneCamera;
    mediaCompany.hdCam = this.state.hdCam;
    mediaCompany.noOfCams = this.state.noOfCams;
    mediaCompany.albums = this.state.albums;
    mediaCompany.photoGraphy = this.state.photoGraphy;
    mediaCompany.filmGraphy = this.state.filmGraphy;
    mediaCompany.U_id = global.id;
    mediaCompany.CamsOne = this.state.CamsOne;
    mediaCompany.PriceOne = this.state.PriceOne;
    mediaCompany.DroneOne = this.state.DroneOne;
    mediaCompany.AlbumOne = this.state.AlbumOne;
    mediaCompany.CamsTwo = this.state.CamsTwo;
    mediaCompany.PriceTwo = this.state.PriceTwo;
    mediaCompany.DroneTwo = this.state.DroneOne;
    mediaCompany.AlbumTwo = this.state.AlbumTwo;
    mediaCompany.CamsThree = this.state.CamsThree;
    mediaCompany.PriceThree = this.state.PriceThree;
    mediaCompany.DroneThree = this.state.DroneThree;
    mediaCompany.AlbumThree = this.state.AlbumThree;

    var url = "https://eventhub-api.conveyor.cloud/api/Media/RegisterMedia";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(mediaCompany),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.warn("Error :", error))
      .then(res => {
        if (res === 1)
          Toast.show("Account Is Registered Successfully", Toast.SHORT);
        else if (res === 2)
          Toast.show("Credentials are not valid", Toast.SHORT);
      });
  }
  render() {
    const { navigation } = this.props;
    const nav = this.props.navigation;
    const genericCompany = navigation.getParam("Object");
    return (
      <ScrollView>
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <CheckBox
                title="Drone Camera"
                checked={this.state.droneCamera}
                onPress={() =>
                  this.setState({ droneCamera: this.state.droneCamera ? 0 : 1 })
                }
              />
              <CheckBox
                title="HD Camera"
                checked={this.state.hdCam}
                onPress={() =>
                  this.setState({ hdCam: this.state.hdCam ? 0 : 1 })
                }
              />
              <CheckBox
                title="Albums"
                checked={this.state.albums}
                onPress={() =>
                  this.setState({ albums: this.state.albums ? 0 : 1 })
                }
              />
            </View>
            <View>
              <CheckBox
                title="Photo Graphy"
                checked={this.state.photoGraphy}
                onPress={() =>
                  this.setState({ photoGraphy: this.state.photoGraphy ? 0 : 1 })
                }
              />
              <CheckBox
                title="Film Graphy"
                checked={this.state.filmGraphy}
                onPress={() =>
                  this.setState({
                    filmGraphy: this.state.filmGraphy ? 0 : 1
                  })
                }
              />
              <CheckBox
                title="Group Photos"
                checked={this.state.groupPhotos}
                onPress={() =>
                  this.setState({ groupPhotos: this.state.groupPhotos ? 0 : 1 })
                }
              />
            </View>
          </View>
          <GenericPicker
            Selected_Value={this.state.itemName}
            iconName="card-giftcard"
            pickerVals={["Item Name", "Media", "Card Designing", "Catering"]}
            On_Value_Change={(value, index) =>
              this.setState({ itemName: value })
            }
          />
          <InputField
            iconName="attach-money"
            placeHolder="Per Day Price"
            keyType="number-pad"
            MaxLen={3}
            On_Change_Text={this.handlePerDayPrice}
          />

          <View style={styles.regform1}>
            <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
              One Day Packege
            </Text>
            <InputField
              iconName="account-circle"
              placeHolder="No Of Cams"
              On_Change_Text={this.handleCamsOne}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <SadaPicker
                Selected_Value={this.state.DroneOne}
                pickerVals={["No of Drons", "1", "2", "3"]}
                On_Value_Change={(value, index) =>
                  this.setState({ DroneOne: value })
                }
              />
              <SadaPicker
                Selected_Value={this.state.AlbumOne}
                pickerVals={["Album", "1", "2", "3", "4"]}
                On_Value_Change={(value, index) =>
                  this.setState({ AlbumOne: value })
                }
              />
            </View>

            <InputField
              iconName="account-circle"
              placeHolder="Price"
              On_Change_Text={this.handlePriceOne}
            />
          </View>
          <View style={styles.regform1}>
            <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
              Two Day Packege
            </Text>
            <InputField
              iconName="account-circle"
              placeHolder="No Of Cams"
              On_Change_Text={this.handleCamsTwo}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <SadaPicker
                Selected_Value={this.state.DroneTwo}
                pickerVals={["No of Drons", "1", "2", "3", "4"]}
                On_Value_Change={(value, index) =>
                  this.setState({ DroneTwo: value })
                }
              />
              <SadaPicker
                Selected_Value={this.state.AlbumTwo}
                pickerVals={["Album", "1", "2", "3", "4", "5"]}
                On_Value_Change={(value, index) =>
                  this.setState({ AlbumTwo: value })
                }
              />
            </View>

            <InputField
              iconName="account-circle"
              placeHolder="Price"
              On_Change_Text={this.handlePriceTwo}
            />
          </View>
          <View style={styles.regform1}>
            <Text style={{ marginLeft: wid("2%"), textAlign: "left" }}>
              Three Day Packege
            </Text>
            <InputField
              iconName="account-circle"
              placeHolder="No Of Cams"
              On_Change_Text={this.handleCamsThree}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <SadaPicker
                Selected_Value={this.state.DroneThree}
                pickerVals={["No of Drons", "1", "2", "3", "4", "5"]}
                On_Value_Change={(value, index) =>
                  this.setState({ DroneThree: value })
                }
              />
              <SadaPicker
                Selected_Value={this.state.AlbumThree}
                pickerVals={["Album", "1", "2", "3", "4", "5", "6"]}
                On_Value_Change={(value, index) =>
                  this.setState({ AlbumThree: value })
                }
              />
            </View>

            <InputField
              iconName="account-circle"
              placeHolder="Price"
              On_Change_Text={this.handlePriceThree}
            />
          </View>
          <TouchButton
            InText="Register"
            On_Press={() => this.decide.bind(this)(nav, genericCompany)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    marginHorizontal: wid("10%"),
    marginTop: hig("5%"),
    alignItems: "center"
  },
  regform1: {
    marginHorizontal: wid("9%"),
    marginTop: hig("2%"),
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    //  paddingHorizontal: 86,
    paddingVertical: 8,
    marginVertical: 8
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    marginBottom: 15
  },
  viewdes: {
    height: hig("6%"),
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "lime",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignSelf: "stretch"
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#59cbbd",
    marginTop: 15
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold"
  },
  text: {
    fontSize: 10,
    alignSelf: "flex-end",
    color: "white"
  }
});
