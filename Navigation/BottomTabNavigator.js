import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const home = "Home";
const profile = "Profile";
const notification = "Notification";
const timetable = "TimeTable";
const settings = "Settings";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: "flex",
        },
        tabBarActiveTintColor: "#191970",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          let rn = route.name;
          if (rn === home) {
            IconName = focused ? "home" : "home-outline";
          } else if (rn === profile) {
            IconName = focused ? "calendar" : "calendar-outline";
          } else if (rn === notification) {
            IconName = focused ? "chatbubble" : "chatbubble-ellipses-outline";
            return (
              <View>
                <Ionicons name={IconName} size={size} color={color} />
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationBadgeText}>1</Text>
                </View>
              </View>
            );
          } else if (rn === timetable) {
            IconName = focused ? "chatbubble" : "chatbubble-ellipses-outline";
          } else if (rn === settings) {
            IconName = focused ? "chatbubble" : "chatbubble-ellipses-outline";
          }
          return <Ionicons name={IconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={home} component={HomeScreen} />
      <Tab.Screen name={profile} component={ProfileScreen} />
      <Tab.Screen name={notification} component={NotificationScreen} />
      <Tab.Screen name={timetable} component={TimeTableScreen} />
      <Tab.Screen name={settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <View>
      <Text>Notification Screen</Text>
    </View>
  );
};

const TimeTableScreen = () => {
  return (
    <View>
      <Text>TimeTable Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -15,
    backgroundColor: '#ff0000',
    borderRadius: 50,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: '#ffffff',
    fontSize: 10,
  },
});

export default BottomTabNavigator;


