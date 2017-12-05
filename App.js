import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';
import SelectScreen from './src/pages/Select';
import MapScreen from './src/pages/Map';
import ComputerMapScreen from './src/pages/Computermap';
import AirconditionerMapScreen from './src/pages/Airconditionermap';
import PrinterMapScreen from './src/pages/Printermap';
import RefrigeratorMapScreen from './src/pages/Refrigeratormap';

const Main = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Select: {
    screen: SelectScreen,
  },
  ComputerMap: {
    screen: ComputerMapScreen,
  },
  AirconditionerMap: {
    screen: AirconditionerMapScreen,
  },
  PrinterMap: {
    screen: PrinterMapScreen,
  },
  RefrigeratorMap: {
    screen: RefrigeratorMapScreen,
  },
});


export default Main;
