
import * as React from 'react'
import { Image } from 'react-native'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { address, booking, call, Home, message, Notification, onGoing, paymnets, Right, setting, star } from '../asset/index';



import Lobby from './lobby';
import { palette } from '../theme';

const Tab = createBottomTabNavigator();
const DashBoard = () => {

  return (
      
    <Tab.Navigator
      initialRouteName="Setting"
      backBehavior='firstRoute'
      
      detachInactiveScreens={false}
      screenOptions={{
        //headerBackTitleVisible: false,
        gestureEnabled: true,
        headerShown: false,
        lazy: false
      }}
      
      tabBarOptions={{
       // activeBackgroundColor: '#c4461c',
        activeTintColor: palette.purple,
        activeColor:palette.purple
      }}>
      <Tab.Screen
        name="HomeStack"
        component={Lobby}
        options={{
          tabBarInactiveTintColor: palette.black,
          tabBarIconStyle:{backgroundColor:palette.purple},
          tabBarLabel: 'Inbox',
          unmountOnBlur: true,
          tabBarLabelStyle: { color: palette.black, fontWeight: '400', },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={message}
              resizeMode='contain'
              style={{ width: 22, height: 22, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen
        name="Notification"
        component={Lobby}
        options={{
          tabBarInactiveTintColor: palette.black,
          tabBarLabel: 'Reviews',
          unmountOnBlur: true,
          tabBarLabelStyle: { color: palette.black, fontWeight: '400',  },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={star}
              resizeMode='contain'
              style={{ width: 22, height: 22, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen
        name="OnGoing"
        component={Lobby}
        options={{
          tabBarInactiveTintColor: palette.black,
          tabBarLabel: 'Calls',
          tabBarLabelStyle: { color: palette.black, fontWeight: '400',  },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={call}
              resizeMode='contain'
              style={{ width: 22, height: 22, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen
        name="Messages"
        component={Lobby}
        options={{
          tabBarInactiveTintColor: palette.black,
          tabBarLabel: 'Payments',
          tabBarLabelStyle: { color: palette.black, fontWeight: '400',  },
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={paymnets}
              resizeMode='contain'
              style={{ width: 22, height: 22, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen
        name="mon"
        component={Lobby}
        options={{
          tabBarInactiveTintColor: palette.black,
          tabBarLabelStyle: { color: palette.black, fontWeight: '400',  },
          tabBarLabel: 'Contacts',
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={address}
              resizeMode='contain'
              style={{ width: 22, height: 22, tintColor: color }}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default DashBoard;