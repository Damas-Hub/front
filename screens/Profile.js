import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const navigation = useNavigation();
  const [indexNo, setIndexNo] = useState("Loading");
  const [email, setEmail] = useState("Loading");
  const [middleName, setMiddleName] = useState("");
  const [address, setAddress] = useState("");
  const [program, setProgram] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [level, setLevel] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch("http://172.20.10.2:8080/", {
        headers: new Headers({
          Authorization: "Bearer " + token,
        }),
      });

      const data = await response.json();
      console.log(data);
      setIndexNo(data.indexNo);
      setEmail(data.email);
      setAddress(data.address);
      setProgram(data.program);
      setDateOfBirth(data.dateOfBirth);
      setLevel(data.level);
      setMiddleName(data.middleName);
      setPhoneNo(data.phoneNo);
      setFirstName(data.firstName);
      setLastName(data.lastName);
    }
    fetchData();
  }, []);

  console.log("Index Number:", indexNo);
  console.log("Email:", email);
  // Add console.log statements for other variables as well

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BottomTabNavigator")}
        >
          <Ionicons
            name="md-arrow-back"
            size={30}
            color="white"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/student.png")}
          style={styles.profileImage}
        />
        <Text style={styles.text}>First Name: Hubert {firstName}</Text>
        <Text style={styles.text}>Last Name: Selormey{lastName}</Text>
        <Text style={styles.text}>Middle Name:Mawuko {middleName}</Text>
        <Text style={styles.text}>Address: Nutefe Mechanical Shop{address}</Text>
        <Text style={styles.text}>Program: BTECH Computer Science {program}</Text>
        <Text style={styles.text}>Index Number: mike1234 {indexNo}</Text>
        <Text style={styles.text}>Date of Birth: 2002/8/25 {dateOfBirth}</Text>
        <Text style={styles.text}>Email: selormeyh@gmail.com {email}</Text>
        <Text style={styles.text}>Phone Number: 0203633237 {phoneNo}</Text>
        <Text style={styles.text}>Level: 300 {level}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0F52BA",
    padding: 10,
    height: 85,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arrowIcon: {
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: -10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Profile;
