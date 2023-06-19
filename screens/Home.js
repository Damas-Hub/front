import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 

const Home = ({ navigation }) => {
  const handleAttendancePress = () => {
    // Functionality for attendance
    // Example: Navigate to the Attendance screen
    navigation.navigate('Attendance');
  };

  const handleGradesPress = () => {
    // Functionality for grades
    // Example: Navigate to the Grades screen
    navigation.navigate('Grades');
  };

  const handleSchedulePress = () => {
    // Functionality for schedule
    // Example: Navigate to the Schedule screen
    navigation.navigate('Schedule');
  };

  const handleProfilePress = () => {
    // Functionality for profile
    // Example: Navigate to the Profile screen
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Information System</Text>

      <TouchableOpacity style={styles.button} onPress={handleAttendancePress}>
        <Text style={styles.buttonText}>Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGradesPress}>
        <Text style={styles.buttonText}>Grades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSchedulePress}>
        <Text style={styles.buttonText}>Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
