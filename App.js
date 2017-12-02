import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';
import SelectScreen from './src/pages/Select';
import MapScreen from './src/pages/Map';

const Main = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Select: {
    screen: SelectScreen,
  },
  Maps: {
    screen: MapScreen,
  },
});


export default Main;
