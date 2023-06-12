import React from "react";
import Splash from "./Splash";
import Login from "./Login";
import Dashboard from "./screens/Dashboard";
import Home from "./BottomScreens/Home";
import TimeTable from "./BottomScreens/TimeTable";
import Profile from "./BottomScreens/Profile";
import Calendar from "./DrawerScreens/Calendar";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
};

export default Auth;
