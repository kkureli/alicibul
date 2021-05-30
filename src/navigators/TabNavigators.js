import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import {SellingStack} from './StackNavigators';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {tabBarGenerator} from '../helpers/TabBottomGenerator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => tabBarGenerator(route, focused),
      })}>
      <Tab.Screen
        options={{tabBarLabel: () => null}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: () => null}}
        name="SearchScreen"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: () => null}}
        name="SellingScreen"
        component={SellingStack}
      />
      <Tab.Screen
        options={{tabBarLabel: () => null}}
        name="MessagesScreen"
        component={MessagesScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: () => null}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
