import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from an API
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      // Make an API request to fetch news data
      const response = await fetch('https://api.example.com/news');
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.log('Error fetching news data:', error);
    }
  };

  const handleArticlePress = (article) => {
    // Navigate to the article details screen
    // You can implement the navigation logic here
    console.log('View article:', article.title);
  };

  const renderArticleItem = ({ item }) => (
    <TouchableOpacity style={styles.articleContainer} onPress={() => handleArticlePress(item)}>
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderArticleItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  listContainer: {
    paddingBottom: 10,
  },
  articleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  articleContent: {
    flex: 1,
    marginLeft: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleDescription: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
});

export default News;
