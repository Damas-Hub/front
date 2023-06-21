 // Profile.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const studentData = {
    name: 'John Doe',
    program: 'Computer Science',
    indexNo: 'CS12345',
    dateOfBirth: '1998-05-15',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    level: 'Junior',
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'lightblue', padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Profile</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />

        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{studentData.name}</Text>
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
});

export default Profile;
