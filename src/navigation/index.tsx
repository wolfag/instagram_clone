import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './rootNavigation';

import RootTab from './RootTab';
import CommentScreen from '../screens/Root/Comment';
import PostOptionsScreen from '../screens/Others/PostOptions';
import ProfileOptionsScreen from '../screens/Others/ProfileOptions';
import AddToHighlightsScreen from '../screens/Others/AddToHighlights';
import EditProfileScreen from '../screens/Home/Account/EditProfile';
import GalleryChooserScreen from '../screens/Home/Account/GalleryChooser';
import TagPeopleScreen from '../screens/Home/Account/TagPeople';
import LocationChooserScreen from '../screens/Home/Account/LocationChooser';
import NotificationOptionsScreen from '../screens/Home/Account/NotificationOptions';
import MuteOptionsScreen from '../screens/Home/Account/MuteOptions';
import FeedbackOptionsScreen from '../screens/Others/FeedbackOptions';
import ShareToDirectScreen from '../screens/Others/ShareToDirect';
import StoryProcessorScreen from '../screens/Others/StoryProcessor';
import PreUploadSuperImageScreen from '../screens/Others/PreUploadSuperImage';
import ProfileInteractionOptionsScreen from '../screens/Others/ProfileInteractionOptions';
import MoveBookmarkOptionsScreen from '../screens/Others/MoveBookmarkOptions';
import StoryFullViewScreen from '../screens/Root/StoryFullView';
import HighlightFullViewScreen from '../screens/Root/HighlightFullView';
import ConversationOptionsScreen from '../screens/Others/Direct/ConversationOptions';
import ShareImagesScreen from '../screens/Others/Direct/ShareImages';
import EmojiOptionsScreen from '../screens/Others/Direct/EmojiOptions';
import SuperImageFullViewScreen from '../screens/Others/Direct/SuperImageFullView';
import ProfileXScreen from '../screens/Home/Explore/ProfileX';
import HashtagScreen from '../screens/Home/Explore/Hashtag';
import LocationScreen from '../screens/Home/Explore/Location';
import ProfileXFollowScreen from '../screens/Home/Explore/ProfileXFollow';
import DiscoverPeopleScreen from '../screens/Home/Account/DiscoverPeople';
import PostDetailScreen from '../screens/Home/PostDetail';
import StoryPrivacyScreen from '../screens/Home/Account/Setting/Privacy/StoryPrivacy';
import CloseFriendsScreen from '../screens/Home/Account/Setting/Privacy/CloseFriends';
import HideStoryFromScreen from '../screens/Home/Account/Setting/Privacy/HideStoryFrom';
import StoryTakerScreen from '../screens/Others/StoryTaker';
import StorySeenListScreen from '../screens/Others/StorySeenList';
import LogoutScreen from '../screens/Home/Account/Setting/Logout';
import ConversationScreen from '../screens/Others/Direct/Conversation';
import ImageFullViewScreen from '../screens/Others/Direct/ImageFullView';
import EditHighlightScreen from '../screens/Home/Account/EditHighlight';
import StoryViewerOptionsScreen from '../screens/Others/StoryViewerOptions';

export type RootStackParamList = {};

const RootStack = createStackNavigator();
const index = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {},
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="RootTab"
        screenOptions={navigationOptions}>
        <RootStack.Screen component={RootTab} name="RootTab" />
        <RootStack.Screen component={CommentScreen} name="CommentScreen" />
        <RootStack.Screen
          component={PostOptionsScreen}
          name="PostOptionsScreen"
        />
        <RootStack.Screen component={LogoutScreen} name="LogoutScreen" />
        <RootStack.Screen
          component={ProfileOptionsScreen}
          name="ProfileOptionsScreen"
        />
        <RootStack.Screen
          component={AddToHighlightsScreen}
          name="AddToHighlightsScreen"
        />
        <RootStack.Screen
          component={EditProfileScreen}
          name="EditProfileScreen"
        />
        <RootStack.Screen
          component={GalleryChooserScreen}
          name="GalleryChooserScreen"
        />
        <RootStack.Screen component={TagPeopleScreen} name="TagPeopleScreen" />
        <RootStack.Screen
          component={LocationChooserScreen}
          name="LocationChooserScreen"
        />
        <RootStack.Screen
          component={NotificationOptionsScreen}
          name="NotificationOptionsScreen"
        />
        <RootStack.Screen
          component={MuteOptionsScreen}
          name="MuteOptionsScreen"
        />
        <RootStack.Screen
          component={FeedbackOptionsScreen}
          name="FeedbackOptionsScreen"
        />
        <RootStack.Screen
          component={ShareToDirectScreen}
          name="ShareToDirectScreen"
        />
        <RootStack.Screen
          component={StoryProcessorScreen}
          name="StoryProcessorScreen"
        />
        <RootStack.Screen
          component={PreUploadSuperImageScreen}
          name="PreUploadSuperImageScreen"
        />
        <RootStack.Screen
          component={ProfileInteractionOptionsScreen}
          name="ProfileInteractionOptionsScreen"
        />
        <RootStack.Screen
          component={MoveBookmarkOptionsScreen}
          name="MoveBookmarkOptionsScreen"
        />
        <RootStack.Screen
          component={StoryFullViewScreen}
          name="StoryFullViewScreen"
        />
        <RootStack.Screen
          component={HighlightFullViewScreen}
          name="HighlightFullViewScreen"
        />
        <RootStack.Screen
          component={ConversationOptionsScreen}
          name="ConversationOptionsScreen"
        />
        <RootStack.Screen
          component={ShareImagesScreen}
          name="ShareImagesScreen"
        />
        <RootStack.Screen
          component={EmojiOptionsScreen}
          name="EmojiOptionsScreen"
        />
        <RootStack.Screen
          component={SuperImageFullViewScreen}
          name="SuperImageFullViewScreen"
        />
        <RootStack.Screen component={ProfileXScreen} name="ProfileXScreen" />
        <RootStack.Screen component={HashtagScreen} name="HashtagScreen" />
        <RootStack.Screen component={LocationScreen} name="LocationScreen" />
        <RootStack.Screen
          component={ProfileXFollowScreen}
          name="ProfileXFollowScreen"
        />
        <RootStack.Screen
          component={DiscoverPeopleScreen}
          name="DiscoverPeopleScreen"
        />
        <RootStack.Screen
          component={PostDetailScreen}
          name="PostDetailScreen"
        />
        <RootStack.Screen
          component={StoryPrivacyScreen}
          name="StoryPrivacyScreen"
        />
        <RootStack.Screen
          component={CloseFriendsScreen}
          name="CloseFriendsScreen"
        />
        <RootStack.Screen
          component={HideStoryFromScreen}
          name="HideStoryFromScreen"
        />
        <RootStack.Screen
          component={StoryTakerScreen}
          name="StoryTakerScreen"
        />
        <RootStack.Screen
          component={ConversationScreen}
          name="ConversationScreen"
        />
        <RootStack.Screen
          component={ImageFullViewScreen}
          name="ImageFullViewScreen"
        />
        <RootStack.Screen
          component={StorySeenListScreen}
          name="StorySeenListScreen"
        />
        <RootStack.Screen
          component={EditHighlightScreen}
          name="EditHighlightScreen"
        />
        <RootStack.Screen
          component={StoryViewerOptionsScreen}
          name="StoryViewerOptionsScreen"
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default index;
