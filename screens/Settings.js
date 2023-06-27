 // Settings.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleLogoutConfirm = () => {
    setShowConfirmation(false);
    navigation.navigate('Login');
  };

  const handleLogoutCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out" size={30} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {/* Add your settings content here */}
      </View>
      <Modal visible={showConfirmation} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmationText}>Are you sure you want to log out?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={handleLogoutConfirm}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.noButton]} onPress={handleLogoutCancel}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F52BA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 70, // Adjust the height as needed
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  yesButton: {
    backgroundColor: 'green',
  },
  noButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Settings;