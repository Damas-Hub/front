import React from "react";
import Splash from "./Splash";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./screens/Dashboard";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Signup"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Auth;
