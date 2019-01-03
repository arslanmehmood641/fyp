import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./app/components/screens/LoginSignup/homePage";
import Login from "./app/components/screens/LoginSignup/sigin";
import Form from "./app/components/screens/Book/apply_for_bookings";
import MediaForm from "./app/components/screens/Book/mediaBooking";
import CatererForm from "./app/components/screens/Book/catererBooking";
import CardRegistration from "./app/components/screens/OwnerRegistration/card_registration";
import CatererRegistration from "./app/components/screens/OwnerRegistration/caterer_registration";
import MediaRegistration from "./app/components/screens/OwnerRegistration/media_registration";
import HallRegistration from "./app/components/screens/OwnerRegistration/hall_registration";
import Registration from "./app/components/screens/OwnerRegistration/registration_form";
import OwnerSettings from "./app/components/screens/OwnerSettings/owner_settings";
import CustomerSettings from "./app/components/screens/CustomerSettings/customer_settings";
import HomeScreen from "./app/components/screens/Home/home";
import Maps from "./app/components/screens/Home/map";
import ManageBookings from "./app/components/screens/Book/Book";
import MediaHome from "./app/components/screens/MediaHome/home";
import CatererHome from "./app/components/screens/CatererHome/home";
import List from "./app/components/screens/Book/bookForm";

const screens = createStackNavigator(
  {
    Home: { screen: HomePage },
    Form: { screen: Form },
    "Card Registration": { screen: CardRegistration },
    "Caterer Registration": { screen: CatererRegistration },
    "Media Registration": { screen: MediaRegistration },
    "Hall Registration": { screen: HallRegistration },
    "Registration Form": { screen: Registration },
    "Owner Settings": { screen: OwnerSettings },
    "Customer Settings": { screen: CustomerSettings },
    "Home Screen": { screen: HomeScreen },
    "Media Home": { screen: MediaHome },
    Form1: { screen: MediaForm },
    Form2: { screen: CatererForm },
    "Caterer Home": { screen: CatererHome },
    Maps: { screen: Maps },
    Login: { screen: Login },
    "Manage Booking": { screen: ManageBookings },
    SadafList: { screen: List }
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

export default screens;
