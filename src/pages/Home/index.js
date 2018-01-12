import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from '../Profile';
import MapScreen from '../Map';
import ChatListScreen from '../ChatList';
import SearchScreen from '../Search';
import { Sidebar } from "../../components";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { header: null } },
    Profile: { screen: ProfileScreen, navigationOptions: { header: null } },
    Map: { screen: MapScreen, navigationOptions: { header: null } },
    ChatList: {screen: ChatListScreen, navigationOptions: { header: null } },
    Search: { screen: SearchScreen, navigationOptions: { header: null } }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default HomeScreenRouter;
