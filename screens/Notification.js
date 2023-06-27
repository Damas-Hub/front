 import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackArrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="md-arrow-back" size={28} color="black" />
    </TouchableOpacity>
  );
};

const Notification = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  const notifications = [
    {
      id: 1,
      title: 'Notification 1',
      message: 'This is the first.',
    },
    {
      id: 2,
      title: 'Notification 2',
      message: 'This is the second.',
    },
    {
      id: 3,
      title: 'Notification 3',
      message: 'This is the second.',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8FBC8F" barStyle="dark-content" />
      <View style={styles.header}>
        <BackArrow onPress={handleGoBack} />
        <Text style={styles.headerText}>Notifications</Text>
        <View style={{ flex: 1 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationContainer}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8FBC8F',
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    height: 70,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    padding: 16,
  },
  notificationContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#888',
  },
});

export default Notification;
