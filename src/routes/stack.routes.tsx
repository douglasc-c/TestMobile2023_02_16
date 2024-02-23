import React from 'react';

import type {RootStackParamList} from '../utils/RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

import {SignIn} from '../screens/SignIn';
import {SplashScreen} from '../screens/SplashScreen';
import { Home } from '../screens/Home';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
