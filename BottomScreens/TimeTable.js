import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeTable = () => {
  const timetableData = [
    { day: 'Mon', time: '9:00 AM - 11:00 AM', course: 'Artificial Intelligence', lecturer: 'Dr. Appiah Ben', venue: 'Digital' },
    { day: 'Tue', time: '10:30 AM - 12:30 PM', course: 'Management Information System', lecturer: 'Mr. Adolph Adu', venue: 'Wings' },
    { day: 'Wed', time: '2:00 PM - 4:00 PM', course: 'Computer Security', lecturer: 'Dr. Appiah Ben', venue: 'Digital' },
    { day: 'Thu', time: '11:00 AM - 1:00 PM', course: 'Android Development', lecturer: 'Mr. Bill Frimpong', venue: 'Main Octagon' },
    { day: 'Fri', time: '1:30 PM - 3:30 PM', course: 'Embedded Systems', lecturer: 'Mr. Bill Frimpong', venue: 'Wings' },
  ];

  const filteredTimetableData = timetableData.filter(item => (
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(item.day) &&
    !(item.day === 'Tue' && item.time === '1:00 PM - 3:00 PM') &&
    !(item.day === 'Thu' && item.time === '2:30 PM - 4:30 PM')
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TIMETABLE FOR COMPUTER SCIENCE L300 - SECOND SEMESTER</Text>
      <View style={styles.space}></View>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Day</Text>
          <Text style={styles.headerCell}>Time</Text>
          <Text style={styles.headerCell}>Course</Text>
          <Text style={styles.headerCell}>Lecturer</Text>
          <Text style={styles.headerCell}>Venue</Text>
        </View>
        {filteredTimetableData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.day}</Text>
            <Text style={styles.cell}>{item.time}</Text>
            <Text style={styles.cell}>{item.course}</Text>
            <Text style={styles.cell}>{item.lecturer}</Text>
            <Text style={styles.cell}>{item.venue}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  space: {
    marginTop: 20,
  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});

export default TimeTable;
