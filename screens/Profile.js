import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
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
  

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <View style={{ backgroundColor: 'lightblue', padding: 10, height: 80, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="md-arrow-back" size={30} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Profile</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />

        {/* Student Data Rows */}
        <View style={styles.row}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{studentData.firstName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Middle Name:</Text>
          <Text style={styles.value}>{studentData.middleName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{studentData.lastName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{studentData.address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Program:</Text>
          <Text style={styles.value}>{studentData.program}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Index No:</Text>
          <Text style={styles.value}>{studentData.indexNo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{studentData.dateOfBirth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{studentData.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>{studentData.phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Level:</Text>
          <Text style={styles.value}>{studentData.level}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  arrowIcon: {
    marginTop: 10, // Adjust the margin as needed to position the arrow downwards
  },
});

export default Profile;
