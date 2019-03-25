import React, { Component } from "react";
import GenericPicker from "../../small_components/generic_picker";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { NavigationEvents } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true, //check if json data fetch online
      data: [], //store an object of json data
      typeOfCompany: "Hall",
      HallData: ""
    };
  }
  UserDashboardDetail() {
    //alert(this.state.typeOfCompany);
    var url;
    if (this.state.typeOfCompany === "Hall") {
      url =
        "https://eventhub-api.conveyor.cloud/api/User/UserDashboard?id=" +
        global.id;
    } else if (this.state.typeOfCompany === "Media") {
      url =
        "https://eventhub-api.conveyor.cloud/api/User/UserDashboardMedia?id=" +
        global.id;
    } else if (this.state.typeOfCompany === "Caterer") {
      url =
        "https://eventhub-api.conveyor.cloud/api/User/UserDashboardCaterer?id=" +
        global.id;
    }

    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ HallData: res });
      });
  }
  componentDidMount() {
    global.typeOfCompany = this.state.typeOfCompany;
    this.UserDashboardDetail();
  }

  decideNavigation(nav) {
    const type = this.state.typeOfCompany;
    var obj = this.state;
    nav.navigate("Customer Completed", { Object: obj });
  }
  decideNavigation1(nav) {
    const type = this.state.typeOfCompany;
    var obj = this.state;
    nav.navigate("Customer Continue", { Object: obj });
  }
  decideNavigation2(nav) {
    const type = this.state.typeOfCompany;
    var obj = this.state;
    nav.navigate("Customer Pending", { Object: obj });
  }
  render() {
    const nav = this.props.navigation;
    return (
      <View>
        <NavigationEvents
          onWillFocus={() => {
            this.UserDashboardDetail();
          }}
        />
        <View style={styles.option}>
          <GenericPicker
            Selected_Value={this.state.typeOfCompany}
            iconName="home"
            pickerVals={["Hall", "Media", "Caterer"]}
            On_Value_Change={(value, index) =>
              this.setState({ typeOfCompany: value }, () => {
                global.typeOfCompany = this.state.typeOfCompany;
                this.UserDashboardDetail.bind(this)(nav);
              })
            }
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.ProgressText}> In-Progress </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View>
            <TouchableOpacity
              style={styles.completedIcon}
              onPress={() => this.decideNavigation.bind(this)(nav)}
            >
              <Icon name={"offline-pin"} size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.completedText}>Completed</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ProgressIcon}
              onPress={() => this.decideNavigation1.bind(this)(nav)}
            >
              <Icon name={"timelapse"} size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.ProgressText}>Continue</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ProgressIcon}
              onPress={() => this.decideNavigation2.bind(this)(nav)}
            >
              <Icon name={"filter-tilt-shift"} size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.PendingText}>Pending</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.ProgressIcon}>
              <Icon name={"notifications-none"} size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.NotificationText}>Notification</Text>
          </View>
        </View>
        <Text style={styles.Request}> Requests </Text>
        <View style={styles.Total}>
          <View style={{ flex: 1, flexDirection: "row", marginTop: hp("1%") }}>
            <View>
              <Text style={styles.t1}>
                {this.state.HallData.TotalSubmitted}
              </Text>
              <Text style={styles.t2}>TOTAL BOOKINGS</Text>
              <Text style={styles.t2}>SUBMITTED</Text>
            </View>
            <View style={styles.i1}>
              <Icon name={"people"} size={70} color="#FFFFFF" />
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: hp("1%") }}>
          <View style={styles.Progress}>
            <View>
              <Text style={styles.t1}>
                {this.state.HallData.TotalInprogress}
              </Text>
              <Text style={styles.t2}>IN-PROGRESS</Text>
              <Text style={styles.t2}>BOOKINGS</Text>
            </View>
            <View style={styles.i2}>
              <Icon name={"timelapse"} size={50} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.completed}>
            <View>
              <Text style={styles.t1}>
                {this.state.HallData.TotalCompleted}
              </Text>
              <Text style={styles.t2}>COMPLETED</Text>
              <Text style={styles.t2}>BOOKINGS</Text>
            </View>
            <View style={styles.i2}>
              <Icon name={"offline-pin"} size={50} color="#FFFFFF" />
            </View>
          </View>
        </View>
        <Text style={styles.Feedback}> Feedback</Text>
        <View style={{ flex: 1, flexDirection: "row", marginTop: hp("1%") }}>
          <View style={styles.Postive}>
            <View>
              <Text style={styles.t5}>0</Text>
              <Text style={styles.t3}>POSTIVE</Text>
              <Text style={styles.t3}>FEEDBACK</Text>
            </View>
            <View style={styles.i2}>
              <Icon name={"thumb-up"} size={60} color="#0D983B" />
            </View>
          </View>
          <View style={styles.Negative}>
            <View>
              <Text style={styles.t6}>0</Text>
              <Text style={styles.t4}>Negative</Text>
              <Text style={styles.t4}>FEEDBACK</Text>
            </View>
            <View style={styles.i2}>
              <Icon name={"thumb-down"} size={60} color="#DB1212" />
            </View>
          </View>
        </View>
        <Text style={styles.PendingT}> Pendings</Text>
        <View style={styles.Total}>
          <View style={{ flex: 1, flexDirection: "row", marginTop: hp("1%") }}>
            <View>
              <Text style={styles.t1}>{this.state.HallData.TotalPending}</Text>
              <Text style={styles.t2}>PENDING</Text>
              <Text style={styles.t2}>BOOKINGS</Text>
            </View>
            <View style={styles.i3}>
              <Icon name={"people"} size={70} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuText: {
    fontSize: 25
  },
  container: {
    marginTop: hp("0.5%"),
    height: hp("20%")
  },
  option: {
    marginLeft: wp("8%")
  },
  completedIcon: {
    borderWidth: 1,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#339933",
    borderRadius: 100,
    marginLeft: wp("14%")
  },
  completedText: {
    marginLeft: wp("11%"),
    fontSize: 14,
    fontWeight: "100",
    color: "#3366FF"
  },
  PendingText: {
    marginLeft: wp("7%"),
    fontSize: 14,
    fontWeight: "100",
    color: "#3366FF"
  },
  NotificationText: {
    marginLeft: wp("5%"),
    fontSize: 14,
    fontWeight: "100",
    color: "#3366FF"
  },
  ProgressIcon: {
    borderWidth: 1,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#339933",
    borderRadius: 100,
    marginLeft: wp("7%")
  },
  PendingIcon: {
    borderWidth: 1,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#339933",
    borderRadius: 100
  },
  ProgressText: {
    marginLeft: wp("18%"),
    fontSize: 14,
    fontWeight: "100",
    color: "#3366FF",
    marginLeft: wp("6%")
  },
  Request: {
    marginLeft: wp("40%"),
    fontSize: 18,
    fontWeight: "500",
    color: "#339933",
    marginTop: hp("11%")
  },
  Feedback: {
    marginLeft: wp("40%"),
    fontSize: 18,
    fontWeight: "500",
    color: "#339933",
    marginTop: hp("14%")
  },
  PendingT: {
    marginLeft: wp("40%"),
    fontSize: 18,
    fontWeight: "500",
    color: "#339933",
    marginTop: hp("14%")
  },
  Total: {
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    width: wp("96%"),
    height: hp("13%"),
    backgroundColor: "#339933",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: hp("1%")
  },
  Progress: {
    marginLeft: wp("2%"),

    backgroundColor: "#C00D0D",
    borderRadius: 10,
    borderWidth: 1,
    width: wp("46%"),
    height: hp("13%"),
    borderColor: "#fff",
    flex: 1,
    flexDirection: "row"
  },
  completed: {
    marginLeft: wp("4%"),
    backgroundColor: "#339933",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: wp("46%"),
    height: hp("13%"),
    flex: 1,
    marginRight: wp("2%"),
    flexDirection: "row"
  },
  Postive: {
    marginLeft: wp("2%"),

    marginTop: hp("0.2%"),
    backgroundColor: "#F0EEEE",
    borderRadius: 10,
    borderWidth: 1,
    width: wp("46%"),
    height: hp("13%"),
    borderColor: "#fff",
    flex: 1,
    flexDirection: "row"
  },
  Negative: {
    marginLeft: wp("4%"),
    backgroundColor: "#F0EEEE",
    marginRight: wp("2%"),
    borderRadius: 10,
    borderWidth: 1,
    marginTop: hp("0.2%"),
    borderColor: "#fff",
    width: wp("46%"),
    height: hp("13%"),
    flex: 1,
    flexDirection: "row"
  },
  t2: {
    marginLeft: wp("5%"),
    fontWeight: "300",
    fontSize: 16,
    color: "#FFFFFF"
  },
  t1: {
    marginLeft: wp("5%"),
    fontWeight: "300",
    fontSize: 16,
    color: "#FFFFFF",
    paddingTop: hp("1")
  },
  t3: {
    marginLeft: wp("5%"),
    fontWeight: "300",
    fontSize: 16,
    color: "#0D983B"
  },
  t4: {
    marginLeft: wp("5%"),
    fontWeight: "300",
    fontSize: 16,
    color: "#DB1212"
  },
  t5: {
    marginLeft: wp("5%"),
    fontWeight: "300",
    fontSize: 16,
    color: "#0D983B",
    paddingTop: hp("1")
  },
  t6: {
    marginLeft: wp("5%"),
    fontWeight: "300",
    fontSize: 16,
    color: "#DB1212",
    paddingTop: hp("1")
  },
  i1: {
    marginLeft: wp("16%"),
    paddingTop: hp("1.5%")
  },
  i2: {
    marginLeft: wp("1.5%"),
    paddingTop: hp("1.8%")
  },
  i3: {
    marginLeft: wp("25%"),
    paddingTop: hp("1.5%")
  }
});
