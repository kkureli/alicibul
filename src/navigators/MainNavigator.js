import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigators';
import {MainStackNavigation} from './StackNavigators';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};
export default MainNavigator;
