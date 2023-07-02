import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const Settings = () => {
  const navigation = useNavigation();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  const headerTextOpacity = useState(new Animated.Value(0))[0];
  const settingsTextOpacity = useState(new Animated.Value(0))[0];
  const subSettingsTextOpacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(headerTextOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(settingsTextOpacity, {
      toValue: 1,
      duration: 500,
      delay: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(subSettingsTextOpacity, {
      toValue: 1,
      duration: 500,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, []);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <View style={[styles.headerContainer, isDarkMode && styles.darkModeHeaderContainer]}>
        <Animated.Text style={[styles.headerText, { opacity: headerTextOpacity }]}>Settings</Animated.Text>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out" size={35} color={isDarkMode ? 'white' : 'red'} />
          <Animated.Text style={[styles.logoutText, isDarkMode && styles.darkModeLogoutText]}>Logout</Animated.Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Animated.Text style={[styles.settingsText, { opacity: settingsTextOpacity }, isDarkMode && styles.darkModeText]}>
          Language:
        </Animated.Text>
        <View style={styles.settingsRow}>
          <Text style={[styles.subSettingsText, isDarkMode && styles.darkModeText]}>Select Language:</Text>
          <Picker
            style={[styles.picker, isDarkMode && styles.darkModePicker]}
            selectedValue={language}
            onValueChange={handleLanguageChange}
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
          </Picker>
        </View>
         
        <Animated.Text style={[styles.subSettingsText, { opacity: subSettingsTextOpacity }, isDarkMode && styles.darkModeText]}>
          - iOS 12 or later
        </Animated.Text>
        <Animated.Text style={[styles.subSettingsText, { opacity: subSettingsTextOpacity }, isDarkMode && styles.darkModeText]}>
          - Android 7.0 or later
        </Animated.Text>
        <Animated.Text style={[styles.settingsText, { opacity: settingsTextOpacity }, isDarkMode && styles.darkModeText]}>
          App Version: 1.0.0
        </Animated.Text>
        <Animated.Text style={[styles.settingsText, { opacity: settingsTextOpacity }, isDarkMode && styles.darkModeText]}>
          Developer: Hubert Selormey Mawuko
        </Animated.Text>
        <Animated.Text style={[styles.settingsText, { opacity: settingsTextOpacity }, isDarkMode && styles.darkModeText]}>
          Developer: Joinice Agbo Dzidzor
        </Animated.Text>
        <Animated.Text style={[styles.settingsText, { opacity: settingsTextOpacity }, isDarkMode && styles.darkModeText]}>
           App Name: InfoSage (HTU-SIS)
        </Animated.Text>
      </View>
      <TouchableOpacity style={[styles.darkModeButton, isDarkMode && styles.darkModeButtonActive]} onPress={toggleDarkMode}>
        <Ionicons name={isDarkMode ? 'moon' : 'sunny'} size={24} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.darkModeButtonText, isDarkMode && styles.darkModeButtonTextActive]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  darkModeContainer: {
    backgroundColor: '#222',
  },
  logoutText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  darkModeLogoutText: {
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F52BA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 90,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  darkModeHeaderContainer: {
    backgroundColor: '#222',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  settingsText: {
    fontSize: 18,
    marginBottom: 10,
    opacity: 0,
    transform: [{ translateY: 10 }],
  },
  subSettingsText: {
    marginLeft: 10,
    marginBottom: 5,
    opacity: 0,
    transform: [{ translateY: 10 }],
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
  },
  darkModeText: {
    color: 'white',
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
  darkModeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    elevation: 5,
  },
  darkModeButtonActive: {
    backgroundColor: 'black',
  },
  darkModeButtonText: {
    marginLeft: 5,
  },
  darkModeButtonTextActive: {
    color: 'white',
  },
});

export default Settings;
