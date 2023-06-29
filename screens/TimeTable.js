import React, { useEffect, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate('BottomTabNavigator'); // Replace 'Home' with the appropriate screen name for your home screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Time Table for Computer Science L300- Second Semester</Text>
    </View>
  );
};
const TimeTable = () => {
  const timetableData = [
    { day: 'Monday', venue: 'Main Octagon', lecturer: 'Dr. Appiah Ben', time: '09:00 AM - 11:00 AM', color: '#337EFF', courseName: 'Computer Security' },
    { day: 'Tuesday', venue: 'Digital', lecturer: 'Mr. Adolph Edu', time: '11:00 AM - 01:00 PM', color: '#337EFF', courseName: 'Data Structures and Algorithms' },
    { day: 'Wednesday', venue: 'Wings', lecturer: 'Mr. Bill Frimpong', time: '02:00 PM - 04:00 PM', color: '#337EFF', courseName: 'Web Development' },
    { day: 'Thursday', venue: 'Main Octagon', lecturer: 'Mr. Sackey Kofi', time: '10:00 AM - 12:00 PM', color: '#337EFF', courseName: 'Database Management' },
    { day: 'Friday', venue: 'Digital', lecturer: 'Mad. Akosua Hanson', time: '01:00 PM - 03:00 PM', color: '#337EFF', courseName: 'Software Engineering' },
  ];

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Header />
      <ScrollView>
        {timetableData.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              styles.itemContainer,
              {
                backgroundColor: item.color,
                opacity: fadeAnim,
                transform: [
                  { scale: scaleAnim },
                  { translateX: slideAnim },
                ],
              },
            ]}
          >
            <View style={[styles.dayContainer, { backgroundColor: '#ccc' }]}>
              <Text style={styles.day}>{item.day}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Venue:</Text>
              <Text style={styles.text}>{item.venue}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Lecturer:</Text>
              <Text style={styles.text}>{item.lecturer}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Time:</Text>
              <Text style={styles.text}>{item.time}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Course:</Text>
              <Text style={styles.text}>{item.courseName}</Text>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#0F52BA',
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  dayContainer: {
    borderRadius: 10,
    marginBottom: 5,
    paddingVertical: 5,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default TimeTable;
