import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';

const Notification = () => {
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
      message: 'This is the third.',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8FBC8F" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
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
    backgroundColor: '#0F52BA',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
    textAlign: 'center',
    marginTop:10
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
