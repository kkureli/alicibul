import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import SellingScreen from '../screens/SellingScreen/SellingScreen';
import ResultScreen from '../screens/ResultScreen/ResultScreen';
import TabNavigator from './TabNavigators';

const Stack = createStackNavigator();

export const SellingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SellingScreen" component={SellingScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TabNavigator"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};
