import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Login from './Login';
import Update from './DrawerScreens/Update';
import TimeTable from './BottomScreens/TimeTable';
import Calendar from './DrawerScreens/Calendar';

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
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Calendar" component={Calendar} />
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
