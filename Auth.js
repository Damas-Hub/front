import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 import Splash from './Splash';
 import Login from "./Login";
import BottomTabNavigator from './Navigation/BottomTabNavigator';




const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          title: "BottomTabNavigator",
          // Custom header styling options if needed
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
