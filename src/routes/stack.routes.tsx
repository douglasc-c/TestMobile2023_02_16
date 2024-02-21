import React from 'react';

import type {RootStackParamList} from '../utils/RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

import {SingIn} from '../screens/SingIn';
// import {Start} from '../Start/';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Singin"
          component={SingIn}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
