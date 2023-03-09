import React, { useEffect, useState, useLayoutEffect,useReducer } from 'react';
import { Image, Text, TouchableOpacity, View, Platform } from 'react-native';

import Login from './login';
import Channels from './channels';

const Lobby = props => {
  const { navigation, sendbird } = props;
  const [initialized, setInitialized] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);


//   const savedUserKey = 'savedUser';

//   const init=async()=>{
//     const token = await EncryptedStorage.getItem("access_token");
//     const session=token?JSON.parse(token):null

//     if(session?.isServiceProvider==true)
//     {
//       setDetails(profileDetails)
//       setBussinessName(profileDetails?.businessName)
//     }
//     else
//     {
//       setDetails(workerData?.profileDetails)
//       setBussinessName(workerData?.profileDetails?.firstName)
//     }
   
//   }

// useEffect(()=>{
// init()
// },[])
//   useLayoutEffect(() => {
//     const title = currentUser ? (
//       <View style={style.headerLeftContainer}>
//         <Text style={style.headerTitle}>Inbox</Text>
//       </View>
//     ) : null;

//     const right = currentUser ? (
//       <View style={style.headerRightContainer}>
//         {/* <TouchableOpacity activeOpacity={0.85} style={style.profileButton} onPress={startChat}>
//           <Icon name="chat" color="#fff" size={28} />
//         </TouchableOpacity> */}
//       </View>
//     ) : null;

//     navigation.setOptions({
//       headerShown: !!currentUser,
//       headerTitle: () => title,
//       headerRight: () => right,
//     });
//   }, [currentUser]);

//   const connect = () => {
    
//         dispatch({ type: 'start-connection' });
//         //Keyboard.dismiss();
//         sendbird.connect(profileDetails?.userId, (err, user) => {
//           if (!err) {
//             if (user.nickname !== profileDetails?.businessName) {
//               sendbird.updateCurrentUserInfo(profileDetails?.businessName, '', (err, user) => {
//                 dispatch({ type: 'end-connection' });
//                 if (!err) {
//                   login(user);
//                 } else {
//                   showError(err.message);
//                 }
//               });
//             } else {
//               dispatch({ type: 'end-connection' });
//               login(user);
//             }
//           } else {
//             dispatch({ type: 'end-connection' });
//             showError(err.message);
//           }
//         });
//   };
//   useEffect(() => {
//     connect()
//     AsyncStorage.getItem(savedUserKey)
//       .then(user => {
//         if (user) {
//           setCurrentUser(JSON.parse(user));
//         }
//         setInitialized(true);
//         return handleNotificationAction(navigation, sendbird, currentUser, 'lobby');
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const login = user => {
//     AsyncStorage.setItem(savedUserKey, JSON.stringify(user))
//       .then(async () => {
//         try {
//           setCurrentUser(user);
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
//         } catch (err) {
//           console.error(err);
//         }
//       })
//       .catch(err => console.error(err));
//   };

//   const logout = async () => {
//     await AsyncStorage.removeItem(savedUserKey);
//     sendbird.disconnect();
//     setCurrentUser(null);
//   };

//   const startChat = () => {
//     if (currentUser) {
//       navigation.navigate('Invite', { currentUser });
//     }
//   };
//   const profile = () => {
//     if (currentUser) {
//       navigation.navigate('Profile', { currentUser });
//     }
//   };

  return (
    <>
      {
          <Channels {...props} currentUser={currentUser} />
        
      }
    </>
  );
};

const style = {
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: 'black',
  },
  logo: {
    width: 32,
    height: 32,
  },
  profileButton: {
    marginLeft: 10,
  },
};

export default Lobby;
