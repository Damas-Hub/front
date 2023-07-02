import React from 'react';
import { View, Text, Button, StyleSheet, Linking, StatusBar, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const News = () => {
  const navigateToWebsite = () => {
    const url = 'https://htu.edu.gh/top-stories/';
    Linking.openURL(url);
  };

  const pictureData = [
    { id: 1, source: require('../assets/images/news1.jpg') },
    { id: 2, source: require('../assets/images/news2.jpg') },
    { id: 3, source: require('../assets/images/news3.jpg') },
    { id: 4, source: require('../assets/images/news4.jpg') },
    { id: 5, source: require('../assets/images/news5.jpg') },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F52BA" />
      <View style={styles.header}>
        <Text style={styles.heading}>News</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.newsContent}>This is HTU news website</Text>
        <Button title="Read More" onPress={navigateToWebsite} style={styles.button} />
      </View>
      <Swiper horizontal showsPagination={false} autoplay autoplayTimeout={4} loop>
        {pictureData.map((item) => (
          <Image key={item.id} source={item.source} style={styles.image} />
        ))}
      </Swiper>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  newsContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
});

export default News;
