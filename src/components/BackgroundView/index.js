import {StatusBar, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../themes';

export default class BackgroundView extends Component {
  render() {
    const {children} = this.props;
    return (
      <SafeAreaView style={styles.container} {...this.props}>
        <StatusBar barStyle="light-content" />
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBack,
    flex: 1,
  },
});
