import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to HTU INFOSAGE</Text>
    </View>
  );
};

const StylishComponent = () => {
  return (
    <View style={styles.stylishContainer}>
      <Image
        source={require( "../assets/images/profile.png")} // Replace with the path to your image
        style={styles.image}
      />
      {/* Add more components or content as needed */}
    </View>
  );
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <StylishComponent />
      {/* Add more components or content as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stylishContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  stylishText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
