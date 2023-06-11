import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ACADEMIC CALENDAR FOR FIRST SEMESTER 2022/2023 ACADEMIC YEAR</Text>
      <Text style={styles.subHeader}>CONTINUING STUDENTS AND FRESH STUDENTS (SEPTEMBER 2022 COHORT)</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>S/N</Text>
          <Text style={styles.activity}>ACTIVITY</Text>
          <Text style={styles.dates}>DATES</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>1.</Text>
          <Text style={styles.activity}>Reporting Date</Text>
          <Text style={styles.dates}>Monday, 5th September, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>2.</Text>
          <Text style={styles.activity}>Registration</Text>
          <Text style={styles.dates}>Monday, 5th– Friday, 16th September, 2022</Text>
        </View>
        {/* Render remaining rows */}
        <View style={styles.row}>
          <Text style={styles.serialNumber}>3.</Text>
          <Text style={styles.activity}>LECTURES BEGIN</Text>
          <Text style={styles.dates}>Monday, 5th September, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>4.</Text>
          <Text style={styles.activity}>ORIENTATION FOR FRESH STUDENTS</Text>
          <Text style={styles.dates}>Wednesday, 14th – Friday, 16th Sept., 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>5.</Text>
          <Text style={styles.activity}>Deadline for Deferment of Programme</Text>
          <Text style={styles.dates}>Friday, 30th September, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>6.</Text>
          <Text style={styles.activity}>Submission of End-of-First Semester Examination Questions to HoDs for Internal Moderation</Text>
          <Text style={styles.dates}>Monday, 26th September, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>7.</Text>
          <Text style={styles.activity}>Opening Non-Denominational Church Service</Text>
          <Text style={styles.dates}>Sunday, 2nd October, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>8.</Text>
          <Text style={styles.activity}>Submission of End-of-First Semester Examination Questions to Pro-Vice-Chancellor’s Office</Text>
          <Text style={styles.dates}>Monday, 3rd October, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>9.</Text>
          <Text style={styles.activity}>MATRICULATION</Text>
          <Text style={styles.dates}>Friday, 14th October, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>10.</Text>
          <Text style={styles.activity}>MEDICAL EXAMINATION FOR FRESH STUDENTS</Text>
          <Text style={styles.dates}>Monday, 17th – Friday, 21st October, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>11.</Text>
          <Text style={styles.activity}>MID-SEMESTER EXAMINATIONS</Text>
          <Text style={styles.dates}>Monday, 31st Oct. – Saturday, 5th Nov., 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>12.</Text>
          <Text style={styles.activity}>S R C WEEK CELEBRATION</Text>
          <Text style={styles.dates}>Thursday, 10th – Saturday, 12th November, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>13.</Text>
          <Text style={styles.activity}>Convocation/VC’s Lecture Series</Text>
          <Text style={styles.dates}>November, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>14.</Text>
          <Text style={styles.activity}>Faculty Week/School Lecture/Seminars</Text>
          <Text style={styles.dates}>November, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>15.</Text>
          <Text style={styles.activity}>Evaluation of Lecturers</Text>
          <Text style={styles.dates}>Monday, 14th – Friday, 18th November, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>16.</Text>
          <Text style={styles.activity}>Upload of End-of-Second Semester Examination Results (2021/2022)</Text>
          <Text style={styles.dates}>Tuesday, 15th November, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>17.</Text>
          <Text style={styles.activity}>LECTURES END</Text>
          <Text style={styles.dates}>Friday, 25th November, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>18.</Text>
          <Text style={styles.activity}>REVISION WEEK</Text>
          <Text style={styles.dates}>Saturday, 26th Nov., 2022– Friday, 2nd Dec., 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>19.</Text>
          <Text style={styles.activity}>Closing Non-Denominational Service & Carols Night</Text>
          <Text style={styles.dates}>Friday, 16th December, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>20.</Text>
          <Text style={styles.activity}>END-OF-FIRST-SEMESTER EXAMINATION</Text>
          <Text style={styles.dates}>Saturday, 3rd – Saturday, 17th Dec., 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>21.</Text>
          <Text style={styles.activity}>Students Depart</Text>
          <Text style={styles.dates}>Sunday, 18th December, 2022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialNumber}>22.</Text>
          <Text style={styles.activity}>Upload of End-of-First Semester Examination Results (2022/2023)</Text>
          <Text style={styles.dates}>Monday, 23rd January, 2023</Text>
        </View>
      </View>
      <Text style={styles.summary}>SUMMARY (15 WEEKS SEMESTER)</Text>
      <Text style={styles.summaryDetails}>TEACHING - 12 WEEKS</Text>
      <Text style={styles.summaryDetails}>REVISION - 1 WEEK</Text>
      <Text style={styles.summaryDetails}>EXAMINATIONS - 2 WEEKS</Text>
      <Text style={styles.signature}>DR. C. K. AMEHOE</Text>
      <Text style={styles.signature}>SIGNED</Text>
      <Text style={styles.signature}>(REGISTRAR)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 8,
  },
  serialNumber: {
    flex: 0.2,
    fontWeight: 'bold',
  },
  activity: {
    flex: 1,
  },
  dates: {
    flex: 1.5,
  },
  summary: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  summaryDetails: {
    marginTop: 8,
  },
  signature: {
    marginTop: 16,
    textAlign: 'right',
  },
});

export default Calendar;
