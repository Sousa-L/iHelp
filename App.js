import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';


const Main = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
});


export default Main;
