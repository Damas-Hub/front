 import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Fees = ({ navigation }) => {
  const bachelorPrograms = {
    facultyOfEngineering: {
      freshStudents: '3,294.00',
      secondYearStudents: '2,811.00',
      thirdYearStudents: '2,811.00',
      fourthYearStudents: '3,121.00',
    },
    facultyOfAppliedSciences: {
      freshStudents: '3,294.00',
      secondYearStudents: '2,811.00',
      thirdYearStudents: '2,811.00',
      fourthYearStudents: '3,121.00',
    },
    facultyOfArtAndDesign: {
      freshStudents: '3,213.00',
      secondYearStudents: '2,731.00',
      thirdYearStudents: '2,731.00',
      fourthYearStudents: '3,041.00',
    },
    businessSchool: {
      freshStudents: '3,138.00',
      secondYearStudents: '2,656.00',
      thirdYearStudents: '2,656.00',
      fourthYearStudents: '2,966.00',
    },
    facultyOfBuiltAndNaturalEnvironment: {
      freshStudents: '3,294.00',
      secondYearStudents: '2,811.00',
      thirdYearStudents: '2,811.00',
      fourthYearStudents: '3,121.00',
    },
  };

  const hndPrograms = {
    facultyOfEngineering: {
      freshStudents: '2,579.00',
      secondYearStudents: '1,984.00',
      thirdYearStudents: '2,047.00',
    },
    facultyOfAppliedSciences: {
      freshStudents: '2,579.00',
      secondYearStudents: '1,984.00',
      thirdYearStudents: '2,047.00',
    },
    facultyOfArtAndDesign: {
      freshStudents: '2,554.00',
      secondYearStudents: '1,958.00',
      thirdYearStudents: '2,033.00',
    },
    businessSchool: {
      freshStudents: '2,427.00',
      secondYearStudents: '1,838.00',
      thirdYearStudents: '1,912.00',
    },
    facultyOfBuiltAndNaturalEnvironment: {
      freshStudents: '2,579.00',
      secondYearStudents: '1,984.00',
      thirdYearStudents: '2,047.00',
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={[styles.title, { color: 'white' }]}>Fees</Text>
      </View>

      <Text style={styles.title}>APPROVED FEES FOR 2022/2023 ACADEMIC YEAR – REGULAR</Text>

      <Text style={styles.heading}>Bachelor Programs:</Text>
      <Text style={styles.programName}>Faculty of Engineering</Text>
      <Text>Fresh Students: GH₵ {bachelorPrograms.facultyOfEngineering.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {bachelorPrograms.facultyOfEngineering.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {bachelorPrograms.facultyOfEngineering.thirdYearStudents}</Text>
      <Text>4th Year Students: GH₵ {bachelorPrograms.facultyOfEngineering.fourthYearStudents}</Text>

      <Text style={styles.programName}>Faculty of Applied Sciences & Technology</Text>
      <Text>Fresh Students: GH₵ {bachelorPrograms.facultyOfAppliedSciences.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {bachelorPrograms.facultyOfAppliedSciences.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {bachelorPrograms.facultyOfAppliedSciences.thirdYearStudents}</Text>
      <Text>4th Year Students: GH₵ {bachelorPrograms.facultyOfAppliedSciences.fourthYearStudents}</Text>

      <Text style={styles.programName}>Faculty of Art and Design</Text>
      <Text>Fresh Students: GH₵ {bachelorPrograms.facultyOfArtAndDesign.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {bachelorPrograms.facultyOfArtAndDesign.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {bachelorPrograms.facultyOfArtAndDesign.thirdYearStudents}</Text>
      <Text>4th Year Students: GH₵ {bachelorPrograms.facultyOfArtAndDesign.fourthYearStudents}</Text>

      <Text style={styles.programName}>Business School</Text>
      <Text>Fresh Students: GH₵ {bachelorPrograms.businessSchool.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {bachelorPrograms.businessSchool.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {bachelorPrograms.businessSchool.thirdYearStudents}</Text>
      <Text>4th Year Students: GH₵ {bachelorPrograms.businessSchool.fourthYearStudents}</Text>

      <Text style={styles.programName}>Faculty of Built and Natural Environment</Text>
      <Text>Fresh Students: GH₵ {bachelorPrograms.facultyOfBuiltAndNaturalEnvironment.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {bachelorPrograms.facultyOfBuiltAndNaturalEnvironment.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {bachelorPrograms.facultyOfBuiltAndNaturalEnvironment.thirdYearStudents}</Text>
      <Text>4th Year Students: GH₵ {bachelorPrograms.facultyOfBuiltAndNaturalEnvironment.fourthYearStudents}</Text>

      <Text style={styles.heading}>HND Programs:</Text>
      <Text style={styles.programName}>Faculty of Engineering</Text>
      <Text>Fresh Students: GH₵ {hndPrograms.facultyOfEngineering.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {hndPrograms.facultyOfEngineering.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {hndPrograms.facultyOfEngineering.thirdYearStudents}</Text>

      <Text style={styles.programName}>Faculty of Applied Sciences & Technology</Text>
      <Text>Fresh Students: GH₵ {hndPrograms.facultyOfAppliedSciences.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {hndPrograms.facultyOfAppliedSciences.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {hndPrograms.facultyOfAppliedSciences.thirdYearStudents}</Text>

      <Text style={styles.programName}>Faculty of Art and Design</Text>
      <Text>Fresh Students: GH₵ {hndPrograms.facultyOfArtAndDesign.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {hndPrograms.facultyOfArtAndDesign.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {hndPrograms.facultyOfArtAndDesign.thirdYearStudents}</Text>

      <Text style={styles.programName}>Business School</Text>
      <Text>Fresh Students: GH₵ {hndPrograms.businessSchool.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {hndPrograms.businessSchool.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {hndPrograms.businessSchool.thirdYearStudents}</Text>

      <Text style={styles.programName}>Faculty of Built and Natural Environment</Text>
      <Text>Fresh Students: GH₵ {hndPrograms.facultyOfBuiltAndNaturalEnvironment.freshStudents}</Text>
      <Text>2nd Year Students: GH₵ {hndPrograms.facultyOfBuiltAndNaturalEnvironment.secondYearStudents}</Text>
      <Text>3rd Year Students: GH₵ {hndPrograms.facultyOfBuiltAndNaturalEnvironment.thirdYearStudents}</Text>

      <Text style={styles.heading}>Note:</Text>
      <Text style={styles.note}>
        1. Fees paid are Not Refundable.
      </Text>
      <Text style={styles.note}>
        2. University Fees should be paid through EAGLE PAY at any networked Branch of GCB Bank LTD.
      </Text>
      <Text style={styles.note}>
        3. SRC Dues should be paid directly into SRC A/C No. 6010221897 at any networked Branch of Zenith Bank and Pay in-slip sent to SRC Office for an Official Receipt.
      </Text>
      <Text style={styles.note}>
        4. The above fees exclude Hostel Fees.
      </Text>
      <Text style={styles.note}>
        5. To qualify for registration of courses for the semester, students must pay at least 60% of the total of their fees in the first semester and pay the remaining in the second semester.
      </Text>
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.paymentButtonText}>Click To Pay Fees</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#0F52BA',
    paddingHorizontal: 16,
    height: 90,
  },
  backButton: {
    marginLeft: 10,
    marginTop: 20,
    paddingBottom: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  programName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'blue'
  },
  note: {
    marginTop: 10,
    color: 'red'
  },
  paymentButton: {
    marginTop: 20,
    backgroundColor: '#0F52BA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    height: 50,
    marginLeft: 40,
    marginRight:40,
    width: 250
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Align the text in the center
  },
});

export default Fees;
