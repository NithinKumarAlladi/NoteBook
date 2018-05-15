import React from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, List, Button, ListItem, Left, Body, Right, Icon } from 'native-base';
import AddNote from './AddNote.js';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';

export default class App extends React.Component {

  render() {
    return <RootStack />

  }

}

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    AddNote: { screen: AddNote },
  },
  {
    initialRouteName: 'Home',
  }
);
