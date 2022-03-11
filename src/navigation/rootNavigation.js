import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {stackName} from '../configs/navigationConstants';
import Screen from '../screens';
import HomeTab from './Tab/HomeTab';

const Stack = createNativeStackNavigator();

export default class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={stackName.homeStack} component={HomeTab} />
        <Stack.Screen
          name={stackName.detailStack}
          component={Screen.DetailScreen}
        />
      </Stack.Navigator>
    );
  }
}
