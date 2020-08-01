import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import Direct from '../screens/Others/Direct';
import StoryTaker from '../screens/Others/StoryTaker';
import AuthStack, {AuthStackParamList} from './AuthStack';
import MainTab, {MainTabParamList} from './MainTab';

export type RootStackParamList = {
  AuthStack: undefined;
  MainTab: undefined;
  StoryTakerScreen: undefined;
  DirectScreen: undefined;
};

export type CommonParamList = AuthStackParamList &
  MainTabParamList &
  RootStackParamList;

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const RootTab = () => {
  const navigationOptions: MaterialTopTabNavigationOptions = {};
  const tabBarOptions: MaterialTopTabBarOptions = {
    indicatorContainerStyle: {
      display: 'none',
    },
    tabStyle: {
      display: 'none',
    },
  };
  const logined = false;
  const initialRouteName = logined ? 'MainTab' : 'AuthStack';

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      tabBarOptions={tabBarOptions}
      screenOptions={navigationOptions}>
      {logined ? (
        <>
          <Tab.Screen component={StoryTaker} name="StoryTakerScreen" />
          <Tab.Screen component={MainTab} name="MainTab" />
          <Tab.Screen component={Direct} name="DirectScreen" />
        </>
      ) : (
        <Tab.Screen component={AuthStack} name="AuthStack" />
      )}
    </Tab.Navigator>
  );
};

export default RootTab;
