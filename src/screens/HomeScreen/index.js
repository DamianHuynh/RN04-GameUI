import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {COLORS} from '../../themes';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: COLORS.lightBack, flex: 1}}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
