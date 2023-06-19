import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = ({ title, isHome }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/menu.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {!isHome && (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image
            style={styles.icon}
            source={require("../assets/icons/left.png")}
            resizeMode="contain"
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      )}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#E7EAEA",
    alignItems: "center",
  },
  menuButton: {
    marginLeft: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  backText: {
    marginLeft: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    // Add your title styles here
  },
});

export default CustomDrawer;
