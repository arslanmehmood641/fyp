import React, { Component } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import {
  TabBar,
  TabViewAnimated,
  TabViewPagerPan,
  TabViewPagerScroll
} from "react-native-tab-view";
import Review from "../../small_components/Review";
import PropTypes from "prop-types";
import { image } from "../../../../utils";
import OneBooking from "../../small_components/OneCompletedBookingOwner";
import profileStyles from "./ProfileStyle";
import Posts from "./Posts";

const styles = StyleSheet.create({ ...profileStyles });

class Profile3 extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    tabContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        imageHeight: PropTypes.number,
        imageWidth: PropTypes.number,
        postWidth: PropTypes.number
      })
    ).isRequired
  };

  static defaultProps = {
    containerStyle: {},
    tabContainerStyle: {}
  };

  state = {
    data: [],
    tabs: {
      index: 0,
      routes: [
        {
          key: "1",
          title: "CONTACT"
        },
        { key: "2", title: "REVIEWS" },
        { key: "3", title: "UPDATES" }
      ]
    },
    postsMasonry: {}
  };
  CustomerReview() {
    var url =
      "https://eventhub-api.conveyor.cloud/api/User/CustomerReview?id=" +
      global.id;
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error :", error))
      .then(res => {
        this.setState({ data: res });
        if (this.state.data.length == 0) {
          alert("no booking found");
        }
      });
  }
  componentDidMount() {
    this.CustomerReview();
  }

  componentWillMount() {
    this.setState({
      postsMasonry: image.mansonry(this.props.posts, "imageHeight")
    });
  }
  _handleIndexChange = index => {
    this.setState({
      tabs: {
        ...this.state.tabs,
        index
      }
    });
  };
  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorTab}
        pressOpacity={0.8}
        renderLabel={this._renderLabel(props)}
        style={styles.tabBar}
      />
    );
  };

  _renderScene = ({ route: { key } }) => {
    switch (key) {
      case "2":
        return this.renderMansonry2Col();
    }
  };

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex =>
      inputIndex === index ? "white" : "gray"
    );
    const color = props.position.interpolate({
      inputRange,
      outputRange
    });

    return (
      <View style={styles.tabRow}>
        <Animated.Text style={[styles.tabLabelText, { color }]}>
          {route.title}
        </Animated.Text>
      </View>
    );
  };
  _renderPager = props => {
    return Platform.OS === "ios" ? (
      <TabViewPagerScroll {...props} />
    ) : (
      <TabViewPagerPan {...props} />
    );
  };
  renderContactHeader = () => {
    const { avatar, avatarBackground, name, bio } = this.props;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={{
              uri: avatarBackground
            }}
            style={styles.coverImage}
          >
            <View style={styles.coverTitleContainer}>
              <Text style={styles.coverTitle} />
            </View>
            <View style={styles.coverMetaContainer}>
              <Text style={styles.coverName}>
                {global.name.split("@gmail.com")}
              </Text>
              <Text style={styles.coverBio}>{global.type}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: avatar
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
    );
  };
  renderMansonry2Col = () => {
    return (
      <View style={styles.mansonryContainer}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={hall => (
              <Review
                hall={hall.item}
                navigation={this.props.navigation}
                userType={this.state.typeOfBooking}
              />
            )}
            keyExtractor={(name, index) => index.toString()}
          />
        </View>
      </View>
    );
  };
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.cardContainer}>
            {this.renderContactHeader()}
            <TabViewAnimated
              navigationState={this.state.tabs}
              onIndexChange={this._handleIndexChange}
              renderHeader={this._renderHeader}
              renderPager={this._renderPager}
              renderScene={this._renderScene}
              style={[styles.tabContainer, this.props.tabContainerStyle]}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Profile3;
