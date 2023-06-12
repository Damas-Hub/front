import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = () => {
    // Perform update logic here
    console.log('Update button pressed');
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Update Your Details Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        onChangeText={(text) => setDateOfBirth(text)}
        value={dateOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.space} />
      <TouchableOpacity onPress={handleUpdate} style={[styles.button, styles.updateButton]}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ADD8E6', // Set background color to grey
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase', // Convert the text to uppercase
    letterSpacing: 2, // Add letter spacing
    color: '#333', // Change the text color
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    height: 45,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginTop: 8,
  },
  button: {
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  updateButton: {
    backgroundColor: '#006994',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    height: 16, // Adjust the height as needed
  },
});

export default Profile;
