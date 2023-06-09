import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Login = () => {
  const [indexNumber, setIndexNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform your login logic here using indexNumber and password
    // For now, let's just log the values
    console.log('Index Number:', indexNumber);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log('Sign Up button pressed');
  };

  const handleForgotPassword = () => {
    // Handle the Forgot Password action here
    console.log('Forgot Password clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME BACK</Text>
      <Image
        source={require('./assets/images/login.jpeg')} // Replace with your image path
        style={styles.images}
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
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.alreadyHaveAccountText}>Don't have an account?</Text>
      <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.signUpButton]}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginTop: 8,
    fontSize: 16, // Increase the font size
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  button: {
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: '#000080',
  },
  alreadyHaveAccountText: {
    textAlign: 'center',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#FFA500',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
