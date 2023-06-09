import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Signup = () => {
  const [indexNumber, setIndexNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log('Sign Up button pressed');
    console.log('Name:', name);
    console.log('Index Number:', indexNumber);
    console.log('Password:', password);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log('Login button pressed');
    console.log('Index Number:', indexNumber);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>HELLO YOU ARE WELCOME</Text>
      <Image
        source={require('./assets/images/signup.png')} // Replace with your image path
        style={styles.images}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Index Number"
        onChangeText={text => setIndexNumber(text)}
        value={indexNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.signUpButton]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
      <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>Login</Text>
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
  },
  images: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 24,
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
  alreadyHaveAccountText: {
    textAlign: 'center',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  button: {
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  signUpButton: {
    backgroundColor: '#FFA500',
  },
  loginButton: {
    backgroundColor: '#000080',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Signup;
