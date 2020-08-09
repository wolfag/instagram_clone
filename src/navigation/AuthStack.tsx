import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register';
import WelcomeScreen, {WelcomeScreenParams} from '../screens/Auth/Welcome';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  WelcomeScreen: WelcomeScreenParams;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={RegisterScreen} name="RegisterScreen" />
      <Stack.Screen
        component={ForgotPasswordScreen}
        name="ForgotPasswordScreen"
      />
      <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
    </Stack.Navigator>
  );
};

export default AuthStack;
