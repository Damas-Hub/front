//  import { StatusBar} from 'expo-status-bar';
//  import { StyleSheet, Text, View, Alert } from 'react-native';
//  import React, {useEffect} from 'react';
 

//  export default function Notification(){

//   async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//     }
//   }
//   useEffect(() => {
//     if (requestUserPermission()){
//       //return fcm token for the device
//       messaging().getToken().then(token => {
//         console.log(token);
//       });
//     }
//     else{
//       console.log("Failed token status", authStatus);
//     }
//      // Check whether an initial notification is available
//      messaging()
//      .getInitialNotification()
//      .then(async(remoteMessage) => {
//        if (remoteMessage) {
//          console.log(
//            'Notification caused app to open from quit state:',
//            remoteMessage.notification,
//          );
//        }   
//      });

//        // Assume a message-notification contains a "type" property in the data payload of the screen to open

//     messaging().onNotificationOpenedApp(remoteMessage => {
//       console.log(
//         'Notification caused app to open from background state:',
//         remoteMessage.notification,
//       );
//     });

//     // Register background handler
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('Message handled in the background!', remoteMessage);
// });

// const unsubscribe = messaging().onMessage(async remoteMessage => {
//   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
// });
//  }, [])

//  return (
//   <View style={styles.container}>
//   <Text>Notification</Text>
//   <StatusBar style="auto"/>
//   </View>
//  );
//  }


import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import registerNNPushToken from 'native-notify';

function wrapClassInHook(Component) {
  return function WrappedComponent(props) {
    registerNNPushToken(9093, '87lgjL6F9rmNdOPgcbJD7b');
    return <Component {...props} />;
  };
}

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: 'Notification 1',
      message: 'This is the first.',
    },
    {
      id: 2,
      title: 'Notification 2',
      message: 'This is the second.',
    },
    {
      id: 3,
      title: 'Notification 3',
      message: 'This is the third.',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8FBC8F" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationContainer}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const WrappedNotification = wrapClassInHook(Notification);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  scrollContainer: {
    padding: 16,
  },
  notificationContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#888',
  },
});

export default WrappedNotification;


 
