import React from 'react';
import { View, Text, Button, StyleSheet, Linking, StatusBar } from 'react-native';

const News = () => {
  const navigateToWebsite = () => {
    const url = 'https://htu.edu.gh/top-stories/';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F52BA" />
      <View style={styles.header}>
        <Text style={styles.heading}>News</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.newsContent}>
          This is HTU news website
        </Text>
        <Button
          title="Read More"
          onPress={navigateToWebsite}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  newsContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
});

export default News;
