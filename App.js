import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';
import RegisterScreen from './src/pages/Register';
import LoginScreen from './src/pages/Login';
import HomeScreen from './src/pages/Home';

const Main = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  }
}, {
    headerMode: 'none'
});


export default Main;
