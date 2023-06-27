import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
 

const Quiz = ({ navigation }) => {
  const questions = [
    
        {
          question: 'What is the purpose of a password manager?',
          options: [
            { label: 'A', text: 'To generate and store strong passwords' },
            { label: 'B', text: 'To protect against malware' },
            { label: 'C', text: 'To encrypt network traffic' },
            { label: 'D', text: 'To block phishing attacks' },
          ],
          correctAnswer: 'A',
        },
        {
          question: 'What is the difference between HTTP and HTTPS?',
          options: [
            { label: 'A', text: 'HTTP is secure, while HTTPS is not' },
            { label: 'B', text: 'HTTP encrypts data, while HTTPS does not' },
            { label: 'C', text: 'HTTPS is secure, while HTTP is not' },
            { label: 'D', text: 'HTTP and HTTPS are the same' },
          ],
          correctAnswer: 'C',
        },
        {
          question: 'What is a brute force attack?',
          options: [
            { label: 'A', text: 'A type of encryption algorithm' },
            { label: 'B', text: 'A social engineering technique' },
            { label: 'C', text: 'An attempt to guess passwords' },
            { label: 'D', text: 'A hardware device for hacking' },
          ],
          correctAnswer: 'C',
        },
        {
          question: 'What is the purpose of multi-factor authentication (MFA)?',
          options: [
            { label: 'A', text: 'To encrypt sensitive data' },
            { label: 'B', text: 'To block phishing attacks' },
            { label: 'C', text: 'To require multiple passwords' },
            { label: 'D', text: 'To add an extra layer of security' },
          ],
          correctAnswer: 'D',
        },
        {
          question: 'What is a SQL injection attack?',
          options: [
            { label: 'A', text: 'An attempt to steal sensitive information' },
            { label: 'B', text: 'A type of denial-of-service attack' },
            { label: 'C', text: 'A hacking technique targeting databases' },
            { label: 'D', text: 'A method to bypass firewalls' },
          ],
          correctAnswer: 'C',
        },
        {
          question: 'What is the purpose of a virtual machine?',
          options: [
            { label: 'A', text: 'To simulate real-world networks' },
            { label: 'B', text: 'To speed up computer processing' },
            { label: 'C', text: 'To isolate and run multiple operating systems' },
            { label: 'D', text: 'To protect against malware' },
          ],
          correctAnswer: 'C',
        },
        {
          question: 'What is a social engineering attack?',
          options: [
            { label: 'A', text: 'An attempt to physically steal hardware' },
            { label: 'B', text: 'A method to bypass firewalls' },
            { label: 'C', text: 'An attempt to manipulate or deceive people' },
            { label: 'D', text: 'A type of denial-of-service attack' },
          ],
          correctAnswer: 'C',
        },
        {
          question: 'What is the purpose of encryption?',
          options: [
            { label: 'A', text: 'To prevent unauthorized access' },
            { label: 'B', text: 'To increase internet speed' },
            { label: 'C', text: 'To simulate real-world networks' },
            { label: 'D', text: 'To remove viruses from a computer' },
          ],
          correctAnswer: 'A',
        },
        {
          question: 'What is a phishing email?',
          options: [
            { label: 'A', text: 'A type of computer virus' },
            { label: 'B', text: 'An attempt to steal sensitive information' },
            { label: 'C', text: 'A method to bypass firewalls' },
            { label: 'D', text: 'A hacking technique targeting databases' },
          ],
          correctAnswer: 'B',
        },
        {
          question: 'What is the purpose of a VPN?',
          options: [
            { label: 'A', text: 'To protect against malware' },
            { label: 'B', text: 'To block spam emails' },
            { label: 'C', text: 'To encrypt network traffic' },
            { label: 'D', text: 'To establish secure remote connections' },
          ],
          correctAnswer: 'D',
        },
        {
            question: 'What is a vulnerability assessment?',
            options: [
              { label: 'A', text: 'A method to test the resilience of a system against attacks' },
              { label: 'B', text: 'A process to identify and classify security vulnerabilities in a system' },
              { label: 'C', text: 'A technique to encrypt sensitive data during transmission' },
              { label: 'D', text: 'A measure to protect against social engineering attacks' },
            ],
            correctAnswer: 'B',
          },
          {
            question: 'What is multi-factor authentication?',
            options: [
              { label: 'A', text: 'A technique to secure wireless network connections' },
              { label: 'B', text: 'A type of encryption algorithm' },
              { label: 'C', text: 'A method to authenticate users using multiple credentials' },
              { label: 'D', text: 'A way to prevent distributed denial-of-service (DDoS) attacks' },
            ],
            correctAnswer: 'C',
          },
          {
            question: 'What is the role of a security incident response team?',
            options: [
              { label: 'A', text: 'To develop secure software applications' },
              { label: 'B', text: 'To monitor network traffic and detect security breaches' },
              { label: 'C', text: 'To perform penetration testing on a system' },
              { label: 'D', text: 'To handle and respond to security incidents in an organization' },
            ],
            correctAnswer: 'D',
          },
        ];
      
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [answers, setAnswers] = useState([]);
        const [showResult, setShowResult] = useState(false);
        const [score, setScore] = useState(0);
        
        const handleAnswer = (selectedOption) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = selectedOption;
        setAnswers(updatedAnswers);
        };
        
        const goToNextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
        setShowResult(true);
        } else {
        setCurrentQuestion(currentQuestion + 1);
        }
        };
        
        const goToPreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
        };
        
        const submitAnswers = () => {
        let score = 0;
        answers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
        score++;
        }
        });
        setScore(score);
        setShowResult(true);
        };
        
        const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
        setScore(0);
        };
        
        if (showResult) {
        return (
        <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator')}>
        <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Quiz</Text>  
        <View style={{ flex: 1 }} />  
      </View>
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.resultText}>Quiz Completed!</Text>
        <Text style={styles.resultText}>Your Score: {score}/{questions.length}</Text>
        <Button title="Restart Quiz" onPress={restartQuiz} />
        </ScrollView>
        </View>
        );
        }
        
        const currentQuestionData = questions[currentQuestion];
        
        return (
        <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator')}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Quiz</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
        {currentQuestion + 1}. {currentQuestionData.question}
        </Text>
        </View>
        <View style={styles.optionsContainer}>
        {currentQuestionData.options.map((option) => (
        <TouchableOpacity
        key={option.label}
        style={[
        styles.optionButton,
        answers[currentQuestion] === option.label && styles.selectedOption,
        ]}
        onPress={() => handleAnswer(option.label)}
        >
        <Text style={styles.optionLabelText}>{option.text}</Text>
        </TouchableOpacity>
        ))}
        </View>
        <View style={styles.buttonContainer}>
        {currentQuestion > 0 && (
        <Button title="Previous" onPress={goToPreviousQuestion} />
        )}
        {currentQuestion < questions.length - 1 && (
        <Button title="Next" onPress={goToNextQuestion} />
        )}
        {currentQuestion === questions.length - 1 && (
        <Button title="Submit" onPress={submitAnswers} />
        )}
        </View>
        <View style={styles.previewContainer}>
        <Text style={styles.previewText}>Selected answers:</Text>
        {answers.map((answer, index) => (
        <Text key={index} style={styles.previewText}>
        Question {index + 1}: {answer || '-'}
        </Text>
        ))}
        </View>
        </ScrollView>
        </View>
        );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
          },
          header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 40,
            paddingBottom: 20,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            backgroundColor:'#0F52BA',
            paddingHorizontal: 16,
          },
          title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center', // Added
            flex: 1, // Added
          },
        contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        },
        questionContainer: {
        marginBottom: 20,
        },
        questionText: {
        fontSize: 18,
        },
        optionsContainer: {
        width: '100%',
        marginBottom: 20,
        },
        optionButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        },
        selectedOption: {
        backgroundColor: '#ccc',
        },
        optionLabelText: {
        fontSize: 16,
        },
        buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        },
        previewContainer: {
        alignItems: 'flex-start',
        },
        previewText: {
        fontSize: 16,
        },
        resultText: {
        fontSize: 18,
        marginBottom: 10,
        },
        });
        
        export default Quiz;