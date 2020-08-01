import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import AccountScreen from '../screens/Home/Account';
import AccountYouDontFollowBackScreen from '../screens/Home/Account/AccountYouDontFollowBack';

import FollowScreen from '../screens/Home/Account/Follow';
import FollowRequestScreen from '../screens/Home/Account/FollowRequest';
import RecentFollowerInteractionScreen from '../screens/Home/Account/RecentFollowerInteraction';
import RecentFollowingInteractionScreen from '../screens/Home/Account/RecentFollowingInteraction';
import SettingNavigationScreen from '../screens/Home/Account/Setting';
import SettingScreen from '../screens/Home/Account/SettingBoard';

import ActivityScreen from '../screens/Home/Activity';

import CreatorScreen from '../screens/Home/Creator';

import ExploreScreen from '../screens/Home/Explore';
import LocationScreen from '../screens/Home/Explore/Location';
import HashtagScreen from '../screens/Home/Explore/Hashtag';
import ProfileXScreen from '../screens/Home/Explore/ProfileX';
import ProfileXFollowScreen from '../screens/Home/Explore/ProfileXFollow';

import ArchiveScreen from '../screens/Home/Account/Archive';
import SavedScreen from '../screens/Home/Account/Setting/Account/Saved';
import SavedCollectionScreen from '../screens/Home/Account/Setting/Account/SavedCollection';
import AddSavedCollectionScreen from '../screens/Home/Account/Setting/Account/AddSavedCollection';
import EditSavedCollectionScreen from '../screens/Home/Account/Setting/Account/EditSavedCollection';
import AddToSavedCollectionScreen from '../screens/Home/Account/Setting/Account/AddToSavedCollection';
import CreateHighlightScreen from '../screens/Home/Account/CreateHighlight';
import ImageClassScreen from '../screens/Home/Explore/ImageClass';

export type MainTabParamList = {
  HomeStack: undefined;
  ExploreStack: undefined;
  CreatorScreen: undefined;
  ActivityStack: undefined;
  AccountStack: undefined;
  Follow: {
    type: 1 | 2;
  };
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<MainTabParamList>();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={AccountScreen} name="AccountScreen" />
      <Stack.Screen component={ProfileXScreen} name="ProfileXScreen" />
      <Stack.Screen
        component={ProfileXFollowScreen}
        name="ProfileXFollowScreen"
      />
      <Stack.Screen component={SettingScreen} name="SettingScreen" />
      <Stack.Screen
        component={CreateHighlightScreen}
        name="CreateHighlightScreen"
      />
      <Stack.Screen component={FollowScreen} name="AccountFollowScreen" />
      <Stack.Screen
        component={FollowRequestScreen}
        name="FollowRequestScreen"
      />

      <Stack.Screen
        component={RecentFollowingInteractionScreen}
        name="RecentFollowingInteractionScreen"
      />
      <Stack.Screen
        component={RecentFollowerInteractionScreen}
        name="RecentFollowerInteractionScreen"
      />
      <Stack.Screen component={ArchiveScreen} name="ArchiveScreen" />
      <Stack.Screen
        component={AccountYouDontFollowBackScreen}
        name="AccountYouDontFollowBackScreen"
      />
    </Stack.Navigator>
  );
};

const ActivityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ActivityScreen} name="ActivityScreen" />
      <Stack.Screen component={FollowScreen} name="ActivityFollowScreen" />
      <Stack.Screen
        component={FollowRequestScreen}
        name="FollowRequestScreen"
      />
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ExploreScreen} name="ExploreScreen" />
      <Stack.Screen component={LocationScreen} name="LocationScreen" />
      <Stack.Screen component={HashtagScreen} name="HashtagScreen" />
      <Stack.Screen component={ProfileXScreen} name="ProfileXScreen" />
      <Stack.Screen
        component={ProfileXFollowScreen}
        name="ProfileXFollowScreen"
      />
      <Stack.Screen component={ImageClassScreen} name="ImageClassScreen" />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={HashtagScreen} name="HashtagScreen" />
      <Stack.Screen component={ProfileXScreen} name="ProfileXScreen" />
      <Stack.Screen
        component={ProfileXFollowScreen}
        name="ProfileXFollowScreen"
      />
      <Stack.Screen component={SavedScreen} name="SavedScreen" />
      <Stack.Screen
        component={SavedCollectionScreen}
        name="SavedCollectionScreen"
      />
      <Stack.Screen
        component={EditSavedCollectionScreen}
        name="EditSavedCollectionScreen"
      />
      <Stack.Screen
        component={AddSavedCollectionScreen}
        name="AddSavedCollectionScreen"
      />
      <Stack.Screen
        component={AddToSavedCollectionScreen}
        name="AddToSavedCollectionScreen"
      />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  const tabBarOptions: BottomTabBarOptions = {showLabel: false};
  const navigationOptions: BottomTabNavigationOptions = {};

  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={navigationOptions}>
      <Tab.Screen component={HomeStack} name="HomeStack" />
      <Tab.Screen component={ExploreStack} name="ExploreStack" />
      <Tab.Screen component={CreatorScreen} name="CreatorScreen" />
      <Tab.Screen component={ActivityStack} name="ActivityStack" />
      <Tab.Screen component={AccountStack} name="AccountStack" />
    </Tab.Navigator>
  );
};

export default MainTab;
