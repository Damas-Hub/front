import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const News = ({ navigation }) => {
  const navigateToWebsite = () => {
    // Open the dummy website in a web browser
    // You can replace the URL with your own dummy website
    navigation.navigate('Web', { url: 'https://htu.edu.gh/top-stories/' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest News</Text>
      <Text style={styles.newsContent}>
        This is some dummy news content.
      </Text>
      <Button
        title="Read More"
        onPress={navigateToWebsite}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
