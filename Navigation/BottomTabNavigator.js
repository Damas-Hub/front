import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from  '../screens/Home';
import Notification from '../screens/Notification'
import Quiz from '../screens/Quiz';
import TimeTable from '../screens/TimeTable';
import Calendar from '../screens/Calendar';

const Tab = createBottomTabNavigator();

const home = "Home";
const quiz = "Quiz";
const notification = "Notification";
const timetable = "TimeTable";
const calendar = "Calendar";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
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
          } else if (rn === calendar) {
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
          } else if (rn === quiz) {
            IconName = focused ? "chatbubble" : "chatbubble-ellipses-outline";
          }
          return <Ionicons name={IconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={quiz} component={Quiz} />
      <Tab.Screen name={notification} component={Notification} />
      <Tab.Screen name={timetable} component={TimeTable} />
      <Tab.Screen name={calendar} component={Calendar} />
    </Tab.Navigator>
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
