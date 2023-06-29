import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const navigation = useNavigation();

  const navigateToFeesScreen = () => {
    navigation.navigate("Fees"); // Replace "Fees" with the actual screen name for Fees.js
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0F52BA" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToFeesScreen} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <Paystack
        paystackKey="pk_test_5976ea70f1c13293e341f9c4e67065ff0679cdc1"
        paystackSecretKey="sk_test_cbda1ced2b368e0a98694859ba0f0785fe36751c"
        billingEmail="selormeyh@gmail.com"
        amount={2047.00}
        billingName="Hubert Selormey"
        billingMobile="0530135583"
        currency="GHS"
        onCancel={(e) => {
          console.log(e);
        }}
        onSuccess={(res) => {
          console.log(res);
        }}
        ref={paystackWebViewRef}
      />
      <ImageComponent />
      <TouchableOpacity
        onPress={() => paystackWebViewRef.current.startTransaction()}
        style={styles.paystack}
      >
        <Text style={styles.pay}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const ImageComponent = () => (
  <View style={styles.imageContainer}>
    <Image
      source={require("../assets/images/login.png")}
      style={styles.image}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -1,
  },
  header: {
    backgroundColor: "#0F52BA",
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: StatusBar.currentHeight || 0,
    height: 85,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    paddingHorizontal: 10,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 500,
  },
  paystack: {
    minWidth: "30%", // Adjust the value to your desired size
    backgroundColor: "#0F52BA",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  
  pay: {
    color: "white",
    height:30,
    fontSize: 20
  },
});

export default Payment;
