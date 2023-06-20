import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

const quotes = [
  'The best way to predict the future is to create it.',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
  'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
  'The only way to do great work is to love what you do.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'Don’t watch the clock; do what it does. Keep going.',
  'If you think math is hard, try web design.',
  'Code is like humor. When you have to explain it, it’s bad.',
  'Simplicity is the soul of efficiency.',
  'The function of good software is to make the complex appear to be simple.',
  'The internet is the first thing that humanity has built that humanity doesn’t understand.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'The best error message is the one that never shows up.',
  'Software is a great combination of artistry and engineering.',
  'It’s not a bug – it’s an undocumented feature.',
  'A good programmer is someone who always looks both ways before crossing a one-way street.',
  'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
  'Walking on water and developing software from a specification are easy if both are frozen.',
  'The best method for accelerating a computer is the one that boosts it by 9.8 m/s².',
  'In order to understand recursion, one must first understand recursion.',
];

const Home = ({ navigation }) => {
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToUpdate = () => {
    navigation.navigate('Update');
  };

  const goToTimeTable = () => {
    navigation.navigate('TimeTable');
  };

  const goToQuiz = () => {
    navigation.navigate('Quiz');
  };

  const goToFees = () => {
    navigation.navigate('Fees');
  };

  const goToCalendar = () => {
    navigation.navigate('Calendar');
  };

  const renderQuoteItem = ({ item }) => (
    <View style={styles.quoteItem}>
      <Text style={styles.quoteText}>{item}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToProfile}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToUpdate}>
          <Image
            source={require('../assets/icons/update.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToTimeTable}>
          <Image
            source={require('../assets/icons/timetable.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>TimeTable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToQuiz}>
          <Image
            source={require('../assets/icons/quiz.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToFees}>
          <Image
            source={require('../assets/icons/fees.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Fees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToCalendar}>
          <Image
            source={require('../assets/icons/calendar.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={quotes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderQuoteItem}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 130,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    marginLeft: 20,
  },
  buttonImage: {
    width: 130,
    height: 120,
    marginTop:80,
  },
  buttonText: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quoteItem: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop:50,
  },
  quoteText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

export default Home;
