import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Calendar = ({ navigation }) => {
  const academicCalendar = [

    
    {
      number: "1.",
      activity: "Reporting Date",
      dates: "Monday, 5th September, 2022",
    },
    {
      number: "2.",
      activity: "Registration",
      dates: "Monday, 5th – Friday, 16th September, 2022",
    },
    {
      number: "3.",
      activity: "LECTURES BEGIN",
      dates: "Monday, 5th September, 2022",
    },
    {
      number: "4.",
      activity: "ORIENTATION FOR FRESH STUDENTS",
      dates: "Wednesday, 14th – Friday, 16th Sept., 2022",
    },
    {
      number: "5.",
      activity: "Deadline for Deferment of Programme",
      dates: "Friday, 30th September, 2022",
    },
    {
      number: "6.",
      activity:
        "Submission of End-of-First Semester Examination Questions to HoDs for Internal Moderation",
      dates: "Monday, 26th September, 2022",
    },
    {
      number: "7.",
      activity: "Opening Non-Denominational Church Service",
      dates: "Sunday, 2nd October, 2022",
    },
    {
      number: "8.",
      activity:
        "Submission of End-of-First Semester Examination Questions to Pro-Vice-Chancellor’s Office",
      dates: "Monday, 3rd October, 2022",
    },
    {
      number: "9.",
      activity: "MATRICULATION",
      dates: "Friday, 14th October, 2022",
    },
    {
      number: "10.",
      activity: "MEDICAL EXAMINATION FOR FRESH STUDENTS",
      dates: "Monday, 17th – Friday, 21st October, 2022",
    },
    {
      number: "11.",
      activity: "MID-SEMESTER EXAMINATIONS",
      dates: "Monday, 31st Oct. – Saturday, 5th Nov., 2022",
    },
    {
      number: "12.",
      activity: "SRC WEEK CELEBRATION",
      dates: "Thursday, 10th – Saturday, 12th November, 2022",
    },
    {
      number: "13.",
      activity: "Convocation/VC’s Lecture Series",
      dates: "November, 2022",
    },
    {
      number: "14.",
      activity: "Faculty Week/School Lecture/Seminars",
      dates: "November, 2022",
    },
    {
      number: "15.",
      activity: "Evaluation of Lecturers",
      dates: "Monday, 14th – Friday, 18th November, 2022",
    },
    {
      number: "16.",
      activity:
        "Upload of End-of-Second Semester Examination Results (2021/2022)",
      dates: "Tuesday, 15th November, 2022",
    },
    {
      number: "17.",
      activity: "LECTURES END",
      dates: "Friday, 25th November, 2022",
    },
    {
      number: "18.",
      activity: "REVISION WEEK",
      dates: "Saturday, 26th Nov., 2022 – Friday, 2nd Dec., 2022",
    },
    {
      number: "19.",
      activity: "Closing Non-Denominational Service & Carols Night",
      dates: "Friday, 16th December, 2022",
    },
    {
      number: "20.",
      activity: "END-OF-FIRST-SEMESTER EXAMINATION",
      dates: "Saturday, 3rd – Saturday, 17th Dec., 2022",
    },
    {
      number: "21.",
      activity: "Students Depart",
      dates: "Sunday, 18th December, 2022",
    },
    {
      number: "22.",
      activity:
        "Upload of End-of-First Semester Examination Results (2022/2023)",
      dates: "Monday, 23rd January, 2023",
    },
  ];

  const handleGoBack = () => {
    navigation.navigate("BottomTabNavigator"); // Replace "Homepage" with the actual screen name for your homepage
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
     <View style={[styles.header, styles.headerWithBorderRadius]}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#333" style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
      </View>
      <Text style={styles.title}>ACADEMIC CALENDAR</Text>
      <Text style={styles.subtitle}>
        FOR FIRST SEMESTER 2022/2023 ACADEMIC YEAR
      </Text>

      <Text style={styles.sectionTitle}>
        CONTINUING STUDENTS AND FRESH STUDENTS (SEPTEMBER 2022 COHORT)
      </Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>S/N</Text>
          <Text style={styles.tableHeader}>ACTIVITY</Text>
          <Text style={styles.tableHeader}>DATES</Text>
        </View>

        {academicCalendar.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableNumber}>{item.number}</Text>
            <Text style={styles.tableActivity}>{item.activity}</Text>
            <Text style={styles.tableDates}>{item.dates}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.summary}>SUMMARY (15 WEEKS SEMESTER)</Text>

      <View style={styles.summaryTable}>
        <View style={styles.summaryTableRow}>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#FF0000" }]}
          >
            TEACHING
          </Text>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#FFFF00" }]}
          >
            –
          </Text>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#00FF00" }]}
          >
            12 WEEKS
          </Text>
        </View>
        <View style={styles.summaryTableRow}>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#0000FF" }]}
          >
            REVISION
          </Text>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#FFFF00" }]}
          >
            –
          </Text>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#00FF00" }]}
          >
            1 WEEK
          </Text>
        </View>
        <View style={styles.summaryTableRow}>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#FF0000" }]}
          >
            EXAMINATIONS
          </Text>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#FFFF00" }]}
          >
            –
          </Text>
          <Text
            style={[styles.summaryTableCell, { backgroundColor: "#00FF00" }]}
          >
            2 WEEKS
          </Text>
        </View>
      </View>

      <Text style={styles.signature}>DR. C. K. AMEHOE</Text>
      <Text style={styles.signature}>SIGNED</Text>
      <Text style={styles.signature}>(REGISTRAR)</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
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
  headerWithBorderRadius: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  goBackIcon: {
    marginLeft: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    alignItems: 'center',
     
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: 'center',
   
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  table: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    marginBottom: 16,
  },
  tableRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
  },
  tableHeader: {
    flex: 1,
    fontWeight: "bold",
    padding: 8,
  },
  tableNumber: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f2f2f2",
  },
  tableActivity: {
    flex: 3,
    padding: 8,
    backgroundColor: "#fff",
  },
  tableDates: {
    flex: 2,
    padding: 8,
    backgroundColor: "#f2f2f2",
  },
  summary: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  summaryTable: {
    marginBottom: 16,
  },
  summaryTableRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  summaryTableCell: {
    flex: 1,
    padding: 4,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  signature: {
    textAlign: "right",
    marginTop: 8,
  },
});
export default Calendar;