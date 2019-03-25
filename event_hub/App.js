import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./app/components/screens/LoginSignup/homePage";
import OwnerProfile from "./app/components/screens/OwnerProfile/index";
import Login from "./app/components/screens/LoginSignup/sigin";
import Form from "./app/components/screens/Book/apply_for_bookings";
import MediaForm from "./app/components/screens/Book/mediaBooking";
import CatererForm from "./app/components/screens/Book/catererBooking";
import CardRegistration from "./app/components/screens/OwnerRegistration/card_registration";
import CatererRegistration from "./app/components/screens/OwnerRegistration/caterer_registration";
import MediaRegistration from "./app/components/screens/OwnerRegistration/media_registration";
import HallRegistration from "./app/components/screens/OwnerRegistration/hall_registration";
import Registration from "./app/components/screens/OwnerRegistration/registration_form";
//Owner Side
import OwnerSettings from "./app/components/screens/OwnerSettings/owner_settings";
import OwnerIndex from "./app/components/screens/OwnerSettings/Index";
import OwnerCompleted from "./app/components/screens/OwnerSettings/CompletedBooking";
import OwnerContinue from "./app/components/screens/OwnerSettings/ContinueBooking";
import OwnerPending from "./app/components/screens/OwnerSettings/PendingBooking";
import CompletedBookings from "./app/components/screens/OwnerSettings/DetailCompletedBooking";
import ContinueBookings from "./app/components/screens/OwnerSettings/DetailContinueBooking";
import PendingBookings from "./app/components/screens/OwnerSettings/DetailPendingBooking";
//Customer side
import CustomerSettings from "./app/components/screens/CustomerSettings/customer_settings";
import CustomerIndex from "./app/components/screens/CustomerSettings/index";
import CustomerContinue from "./app/components/screens/CustomerSettings/CustomerContinue";
import CustomerPending from "./app/components/screens/CustomerSettings/CustomerPending";
import CustomerCompleted from "./app/components/screens/CustomerSettings/CustomerCompleted";
import CompletedBookings1 from "./app/components/screens/CustomerSettings/DetailCompletedBooking";
import ContinueBookings1 from "./app/components/screens/CustomerSettings/DetailContinueBooking";
import PendingBookings1 from "./app/components/screens/CustomerSettings/DetailPendingBooking";
import HomeScreen from "./app/components/screens/Home/home";
import Maps from "./app/components/screens/Home/map";

import MediaHome from "./app/components/screens/MediaHome/home";
import CatererHome from "./app/components/screens/CatererHome/home";
import List from "./app/components/screens/Book/bookForm";

const screens = createStackNavigator(
  {
    Home: { screen: HomePage },
    Form: { screen: Form },
    "Owner Profile": { screen: OwnerProfile },
    "Card Registration": { screen: CardRegistration },
    "Caterer Registration": { screen: CatererRegistration },
    "Media Registration": { screen: MediaRegistration },
    "Hall Registration": { screen: HallRegistration },
    "Registration Form": { screen: Registration },
    "Owner Settings": { screen: OwnerSettings },
    "Owner Index": { screen: OwnerIndex },
    "Customer Index": { screen: CustomerIndex },
    "Owner Completed": { screen: OwnerCompleted },
    "Owner Continue": { screen: OwnerContinue },
    "Owner Pending": { screen: OwnerPending },
    "Customer Completed": { screen: CustomerCompleted },
    "Customer Continue": { screen: CustomerContinue },
    "Customer Pending": { screen: CustomerPending },
    "Customer Settings": { screen: CustomerSettings },
    "Home Screen": { screen: HomeScreen },
    "Media Home": { screen: MediaHome },
    Form1: { screen: MediaForm },
    Form2: { screen: CatererForm },
    "Caterer Home": { screen: CatererHome },
    Maps: { screen: Maps },
    Login: { screen: Login },
    "Completed Booking": { screen: CompletedBookings },
    "Continue Booking": { screen: ContinueBookings },
    "Pending Booking": { screen: PendingBookings },
    "Customer Completed Booking": { screen: CompletedBookings1 },
    "Customer Continue Booking": { screen: ContinueBookings1 },
    "Customer Pending Booking": { screen: PendingBookings1 },
    SadafList: { screen: List }
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

export default screens;
