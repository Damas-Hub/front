import React, { useEffect, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, Animated } from 'react-native';

const TimeTable = () => {
  const timetableData = [
    { day: 'Monday', venue: 'Main Octagon', lecturer: 'John Doe', time: '09:00 AM - 11:00 AM', color: '#FF5733', courseName: 'Introduction to Computer Science' },
    { day: 'Tuesday', venue: 'Digital', lecturer: 'Jane Smith', time: '11:00 AM - 01:00 PM', color: '#33FFBD', courseName: 'Data Structures and Algorithms' },
    { day: 'Wednesday', venue: 'Wings', lecturer: 'Mike Johnson', time: '02:00 PM - 04:00 PM', color: '#337EFF', courseName: 'Web Development' },
    { day: 'Thursday', venue: 'Main Octagon', lecturer: 'Sarah Lee', time: '10:00 AM - 12:00 PM', color: '#FF33B6', courseName: 'Database Management' },
    { day: 'Friday', venue: 'Digital', lecturer: 'Alex Brown', time: '01:00 PM - 03:00 PM', color: '#FFBD33', courseName: 'Software Engineering' },
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"\n"}<Text style={styles.titleText}>Time Table for Computer Science L300- Second Semester</Text></Text>
      </View>
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
    padding: 10,
    backgroundColor: '#ADD8E6',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
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
