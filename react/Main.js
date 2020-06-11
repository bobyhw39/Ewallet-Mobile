/**
 * Sample React Native Main
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Native from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Screens/Login/LoginScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios'
import Profile from './Screens/Profile/Profile';
import TopUpScreen from './Screens/TopUp/TopUpScreen';
import PulsaScreen from './Screens/Pulsa/PulsaScreen';
import PoinScreen from './Screens/Poin/PoinScreen';
import RiwayatScreen from './Screens/Riwayat/RiwayatScreen';
import TransferScreen from './Screens/Transfer/TransferScreen';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen'
import BottomNavigator from './Navigator/BottomNavigator';

const Stack = createStackNavigator();

function Main(){
  return (
      <>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="ProfileScreen" component={Profile}/>
            <Stack.Screen name="TopUpScreen" component={TopUpScreen}/>
            <Stack.Screen name="PulsaScreen" component={PulsaScreen}/>
            <Stack.Screen name="PoinScreen" component={PoinScreen}/>
            <Stack.Screen name="RiwayatScreen" component={RiwayatScreen}/>
            <Stack.Screen name="TransferScreen" component={TransferScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
};

const styles = Native.StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Main;
