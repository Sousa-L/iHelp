import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from '../Profile';
import { Sidebar } from "../../components";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { header: null } },
    Profile: { screen: ProfileScreen, navigationOptions: { header: null } },
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default HomeScreenRouter;
