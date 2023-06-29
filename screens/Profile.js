import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const studentData = {
    firstName: 'John',
    middleName: 'Robert',
    lastName: 'Doe',
    address: '123 Main St',
    program: 'Computer Science',
    indexNo: 'CS12345',
    dateOfBirth: '1998-05-15',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    level: 'Junior',
  };

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );

  const dataRows = [
    { label: 'First Name:', value: studentData.firstName },
    { label: 'Middle Name:', value: studentData.middleName },
    { label: 'Last Name:', value: studentData.lastName },
    { label: 'Address:', value: studentData.address },
    { label: 'Program:', value: studentData.program },
    { label: 'Index No:', value: studentData.indexNo },
    { label: 'Date of Birth:', value: studentData.dateOfBirth },
    { label: 'Email:', value: studentData.email },
    { label: 'Phone Number:', value: studentData.phoneNumber },
    { label: 'Level:', value: studentData.level },
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator')}>
          <Ionicons name="md-arrow-back" size={30} color="white" style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/images/student.png')} style={styles.profileImage} />
        
        {/* Student Data Rows */}
        <FlatList
          data={dataRows}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0F52BA',
    padding: 10,
    height: 85,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arrowIcon: {
    marginTop: 15, // Adjust the margin as needed to position the arrow downwards
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: -10,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
});

export default Profile;
