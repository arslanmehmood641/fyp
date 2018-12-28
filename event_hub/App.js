import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./app/components/screens/LoginSignup/homePage";
import Form from "./app/components/screens/Book/apply_for_bookings";
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
    Maps: { screen: Maps },
    "Manage Booking": { screen: ManageBookings },
    SadafList: { screen: List }
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

export default screens;
