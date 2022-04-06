import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/rootStore';
import RootNavigation from './src/navigation/rootNavigation';
import {navigationRef} from './src/navigation/NavigationWithoutProp';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
