// import React from 'react';
// import {
//     TouchableOpacity,
//     ScrollView,
//     Text,
//     View,
//     Image,
// } from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import BottomTabNavigator from './BottomTabNavigator';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';

// const Drawer = createDrawerNavigator();
// const CustomDrawerContent = (props)=>{
    
//     const navigation = useNavigation();

//     return(
//         <SafeAreaView
//         style={{flex:1, backgroundColor:"#fff"}}
//         >
//         <View
//         style={{
//             height:60,
//             alignItems:"center",
//             justifyContent: "center",
//         }}
//         >
//         </View>

//         <ScrollView
//         style={{marginLeft:5}}
//         >

//         <TouchableOpacity
//         style={{
//             marginTop:25,
//             flexDirection: "row",
//             marginBottom:20,
//             marginLeft: 10,
//             alignItems: "center",
//         }}
//         >
//         <Image
//         style={{
//             width: 40,
//             height: 40,
//             marginLeft: 10,
//         }}
//         source={require(".././assets")}
//          />

//         </TouchableOpacity>

//         </ScrollView>

//         </SafeAreaView>
//     )

// }