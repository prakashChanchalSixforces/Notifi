import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SendBird from 'sendbird';
import { AppContext, withAppContext } from './context';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lobby from './page/lobby';
import Chat from './page/chat';
import { NavigationContainer } from '@react-navigation/native';
import DashBoard from './page/Dashboard';
import SignUp from './page/signUp/Index';

// import Member from './page/member';
// import Invite from './page/invite';
// import Profile from './page/profile';



const Stack = createNativeStackNavigator();

const appId = '47492D57-FE0E-42C5-8C55-CD04E25C1674';
const sendbird = new SendBird({ appId });
sendbird.setErrorFirstCallback(true);

const initialState = {
  sendbird,
};

const defaultHeaderOptions = {
  headerStyle: {
    backgroundColor:'white',
  },
  headerTintColor: 'black',
};
const defaultHeaderOptions2={

}

const App = () => {
  const savedUserKey = 'savedUser';

  // useEffect(() => {
  //   AsyncStorage.getItem(savedUserKey)
  //     .then(async user => {
  //       try {
  //         if (user) {
  //           const authorizationStatus = await messaging().requestPermission();
  //           if (
  //             authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //             authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
  //           ) {
  //             if (Platform.OS === 'ios') {
  //               const token = await messaging().getAPNSToken();
  //               sendbird.registerAPNSPushTokenForCurrentUser(token);
  //             } else {
  //               const token = await messaging().getToken();
  //               sendbird.registerGCMPushTokenForCurrentUser(token);
  //             }
  //           }
  //         }
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     })
  //     .catch(err => console.error(err));

  //   if (Platform.OS !== 'ios') {
  //     const unsubscribeHandler = messaging().onMessage(onRemoteMessage);
  //     return unsubscribeHandler;
  //   }
  // }, []);

  return (
   
    <AppContext.Provider value={initialState}>
<NavigationContainer>
  
        <Stack.Navigator>
    
        <Stack.Screen name="All Conversations" component={DashBoard} options={{ ...defaultHeaderOptions }} />
          <Stack.Screen name="Chat" component={Chat} options={{ headerShown:false }} />
         
          {/* <Stack.Screen name="Member" component={Member} options={{ ...defaultHeaderOptions }} />
          <Stack.Screen name="Invite" component={Invite} options={{ ...defaultHeaderOptions }} />
          <Stack.Screen name="Profile" component={Profile} options={{ ...defaultHeaderOptions }} /> */}
        </Stack.Navigator>
        </NavigationContainer>
        </AppContext.Provider>
       
     
  );
};

export default App;
