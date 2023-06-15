import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Update from "./DrawerScreens/Update";
import TimeTable from "./BottomScreens/TimeTable";
import Calendar from "./DrawerScreens/Calendar";
import Fees from "./DrawerScreens/Fees";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
// import CustomDrawer from "./Navigation/CustomDrawer";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Fees" component={Fees} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default Auth;
