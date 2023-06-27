import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, FlatList, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#0F52BA',
    paddingHorizontal: 16,
  },
  backArrow: {
    marginRight: 8,
    marginLeft: -7,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#333',
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
    height: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginBottom: 24,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileImagePlaceholder: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  fileInput: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

const BackArrow = () => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate('BottomTabNavigator'); // Replace 'BottomTabNavigator' with the appropriate screen name in your navigation stack
  };

  return (
    <TouchableOpacity style={styles.backArrow} onPress={handleBackButtonPress}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};


const Update = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleUpdate = () => {
    // Perform update logic here
    console.log('Update button pressed');
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Password:', password);
    console.log('Profile Image:', profileImage);
  };

  const handleProfileImageUpload = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission to access media library denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfileImage(result.uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const renderItem = ({ item }) => {
    if (item === 'welcomeText') {
      return (
        <Text style={styles.welcomeText}>Update Your Details Here</Text>
      );
    } else if (item === 'profileImageContainer') {
      return (
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.profileImagePlaceholder}>Select Profile Image</Text>
          )}
          <TouchableOpacity onPress={handleProfileImageUpload}>
            <Text style={styles.fileInput}>Choose Image</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (item === 'email') {
      return (
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      );
    } else if (item === 'phoneNumber') {
      return (
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="numeric"
          autoCapitalize="none"
        />
      );
    } else if (item === 'dateOfBirth') {
      return (
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
      );
    } else if (item === 'password') {
      return (
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
      );
    } else if (item === 'space') {
      return <View style={styles.space} />;
    } else if (item === 'updateButton') {
      return (
        <TouchableOpacity onPress={handleUpdate} style={[styles.button, styles.updateButton]}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      );
    }

    return null;
  };

  const data = [
    'welcomeText',
    'profileImageContainer',
    'email',
    'phoneNumber',
    'dateOfBirth',
    'password',
    'space',
    'updateButton',
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <View style={styles.header}>
        <BackArrow onPress={() => navigation.navigate('Home')} />
        <Text style={styles.headerTitle}>Update</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Update;
