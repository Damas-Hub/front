import React from "react";
import Splash from "./Splash";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./screens/Dashboard";
import Home from "./BottomScreens/Home";
import TimeTable from "./BottomScreens/TimeTable";
import Calendar from "./BottomScreens/Calendar";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Calendar"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Calendar" component={Calendar} />

    </Stack.Navigator>
  );
};

export default Auth;
