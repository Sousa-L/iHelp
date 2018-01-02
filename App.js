import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';
import RegisterScreen from './src/pages/Register';
import WelcomeMenu from './src/components/WelcomeMenu';

const Main = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Menu: {
    screen: WelcomeMenu,
  },
  Register: {
    screen: RegisterScreen,
  },
});


export default Main;
