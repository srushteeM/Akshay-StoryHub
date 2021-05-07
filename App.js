import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStory from "./Screens/WriteStory"
import ReadStory from "./Screens/ReadStory"
import {createAppContainer} from "react-navigation"
 import { createBottomTabNavigator } from "react-navigation-tabs"

export default class App extends React.Component {
  render(){
    return (
     <AppContainer/>
    );
  }
  
}


const Tab = createBottomTabNavigator({
  WriteStory:WriteStory, ReadStory:ReadStory
});
const AppContainer = createAppContainer(Tab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});