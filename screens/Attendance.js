import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Attendance = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleAttendance = () => {
    const attendanceData = {
      date: selectedDate,
      status: 'Present',
    };
    setAttendanceHistory([...attendanceHistory, attendanceData]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Attendance App</Text>

      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>
          {selectedDate ? selectedDate.toDateString() : 'Select Date'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAttendance}>
        <Text style={styles.buttonText}>Mark Attendance</Text>
      </TouchableOpacity>

      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={attendanceHistory}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyDate}>{item.date.toDateString()}</Text>
              <Text style={styles.historyStatus}>{item.status}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>No attendance history</Text>}
        />
      </SafeAreaView>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e1e1e1',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 20,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  historyDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyStatus: {
    fontSize: 16,
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default Attendance;
