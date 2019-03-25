import { Dimensions } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

export default {
  cardContainer: {
    flex: 1
  },
  container: {
    flex: 1
  },
  coverBio: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600"
  },
  coverContainer: {
    marginBottom: 55,
    position: "relative"
  },
  coverImage: {
    height: Dimensions.get("window").width * (3 / 4),
    width: Dimensions.get("window").width
  },
  coverMetaContainer: {
    backgroundColor: "transparent",
    paddingBottom: 10,
    paddingLeft: 135
  },
  coverName: {
    color: "green",
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 2
  },
  coverTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  coverTitleContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 45
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  indicatorTab: {
    backgroundColor: "transparent"
  },
  mansonryContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0
  },
  profileImage: {
    borderColor: "#FFF",
    borderRadius: 55,
    borderColor: "green",
    borderWidth: 3,
    height: 110,
    width: 110
  },
  profileImageContainer: {
    bottom: 0,
    left: 10,
    position: "absolute"
  },
  sceneContainer: {
    marginTop: 10
  },
  scroll: {
    backgroundColor: "#FFF"
  },
  tabBar: {
    backgroundColor: "transparent",
    marginBottom: -10,
    marginLeft: 130,
    marginRight: 15
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
    marginTop: -55,
    position: "relative",

    zIndex: 10
  },
  tabRow: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1
  },
  tabLabelNumber: {
    color: "green",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 2,
    backgroundColor: "green"
    //borderRadius: 70
  },
  tabLabelText: {
    color: "green",
    backgroundColor: "green",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    height: heightPercentageToDP("3%"),
    width: widthPercentageToDP("21%"),
    borderRadius: 100
  }
};
