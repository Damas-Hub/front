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
  const [email, SetEmail] = useState("Loading");

  // User details Callback and API callback
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
      SetEmail(data.email);
    }
    fetchData();
  }, []);

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
        <Text>Index Number : {indexNo}</Text>
        <Text>Email: {email}</Text>
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
    marginTop: 15, // Adjust the margin as needed to position the arrow downwards
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
});

export default Profile;
