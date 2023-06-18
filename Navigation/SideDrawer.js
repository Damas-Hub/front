import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
  Modal,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
 import BottomTabNavigator from "./BottomTabNavigator";
 import Attendance from '../screens/Attendance';
 import Profile from '../screens/Profile'
import Fees from "../screens/Fees";
import Settings from "../screens/Settings";
import Update from "../screens/Update";
import Logout from "../screens/Logout";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("Loading");
  const [email, setEmail] = useState("Loading");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Image Profile View */}
      <View
        style={{
          height: 160,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image container and User name Appearance */}
        <View
          style={{
            borderBottomColor: "#6b7280",
            borderBottomWidth: 1,
            flexDirection: "row",
            paddingBottom: 10,
            alignItems: "center",
            marginBottom: -35,
          }}
        >
          <Image
            style={{
              marginBottom: 5,
              height: 65,
              width: 65,
            }}
            source={require("../assets/icons/home.png")}
          />
        </View>
      </View>

      <ScrollView
        style={{
          marginLeft: 5,
        }}
      >
        {/* Users details callback */}
        <View>
          <Text
            style={{
              justifyContent: "center",
              fontSize: 17,
              fontWeight: "bold",
              marginBottom: 5,
              textAlign: "center",
              color: "#333",
            }}
          >
            {username}
          </Text>
          <Text
            style={{
              justifyContent: "center",
              fontSize: 13,
              fontWeight: "normal",
              marginBottom: 20,
              textAlign: "center",
              color: "#9CA3AF",
            }}
          >
            {email}
          </Text>
        </View>

        {/* Home Tab */}
        <TouchableOpacity
          style={{
            marginTop: 25,
            flexDirection: "row",
            marginBottom: 20,
            marginLeft: 10,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
            source={require("../assets/icons/settings.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>

        {/* Records Tab */}
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: "row",
            marginBottom: 20,
            marginLeft: 10,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("Attendance")}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
            source={require("../assets/icons/attendace.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Attendance
          </Text>
        </TouchableOpacity>

        {/* View Records Tab */}
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: "row",
            marginBottom: 20,
            marginLeft: 10,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("Fees")}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
              tintColor: "#007bff",
            }}
            source={require("../assets/icons/fees.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Fees
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: "row",
            marginBottom: 20,
            marginLeft: 10,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("Profile")}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
            source={require("../assets/icons/quiz.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#333",
              fontWeight: "bold",
            }}
          >
           Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: "row",
            marginBottom: 20,
            marginLeft: 10,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("Update")}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
            source={require("../assets/icons/update.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Logout Tab */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginBottom: 100,
          marginLeft: 10,
          alignItems: "center",
        }}
        onPress={() => {
          props.navigation.closeDrawer();
          setModalVisible(true);
        }}
      >
        <Image
          style={{ width: 35, height: 35, marginLeft: 20 }}
          source={require("../assets/icons/logout.png")}
          resizeMode="contain"
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 17,
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 15,
              width: "80%",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Logout
            </Text>
            <Text style={{ marginBottom: 15 }}>
              Are you sure you want to Logout?
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  padding: 10,
                  borderRadius: 5,
                  width: "25%",
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 10,
                  borderRadius: 5,
                  width: "25%",
                }}
                onPress={() => {
                  setModalVisible(false);
                  Signout(props);
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const SideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent = {(props) => CustomDrawerContent(props)}
      initialRouteName="Menu"
    >
      <Drawer.Screen
        name="Menu"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Attendance"
        component={Attendance}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Fees"
        component={Fees}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Update"
        component={Update}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
