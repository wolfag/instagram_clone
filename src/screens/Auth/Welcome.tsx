import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MyButton from '../../components/MyButton';
import Loading from '../../components/Loading';
import {SCREEN_HEIGHT, STATUS_BAR_HEIGHT, SCREEN_WIDTH} from '../../constants';
import {CommonParamList} from '../../navigation/RootTab';
import ChangeUsernameForm from './components/ChangeUsernameForm';
import {RegisterFormValueStep1} from './components/RegisterFormStep1';
import {RegisterFormValueStep2} from './components/RegisterFormStep2';
import {RegisterFormValueStep3} from './components/RegisterFormStep3';

export type WelcomeScreenParams = RegisterFormValueStep1 &
  RegisterFormValueStep2 &
  RegisterFormValueStep3;

type WelcomeScreenRouteProp = RouteProp<CommonParamList, 'WelcomeScreen'>;
type WelcomeScreenNavigationProp = StackNavigationProp<
  CommonParamList,
  'WelcomeScreen'
>;
type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
};

type WelcomeContentProps = {
  username: string;
  onNext: () => void;
  onChangeUsername: () => void;
};

const WelcomeContent = ({
  username,
  onNext,
  onChangeUsername,
}: WelcomeContentProps): JSX.Element => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>WELCOME TO INSTAGRAM</Text>
        <Text style={styles.username}>{`@${username}`}</Text>
      </View>
      <Text style={styles.description}>
        {
          'Find people to follow and start sharing photos.\nYou can change you username anytime.'
        }
      </Text>
      <MyButton onPress={onNext} label="Next" />
      <MyButton
        onPress={onChangeUsername}
        link
        label="Change username"
        labelStyle={styles.changeBtnText}
      />
    </View>
  );
};

const WelcomeScreen = ({
  navigation,
  route,
}: WelcomeScreenProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isChangeUsername, setIsChangeUsername] = useState<boolean>(false);
  const [username, setUsername] = useState(route?.params?.email?.split('@')[0]);

  const _onChangeUsername = useCallback(() => {
    setIsChangeUsername(true);
  }, []);

  const _onNext = useCallback(() => {}, []);

  const _onSubmitChangeUsername = useCallback(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Loading loading={loading} label="Registering..." />
      <View style={styles.body}>
        {isChangeUsername ? (
          <ChangeUsernameForm
            onSubmit={_onSubmitChangeUsername}
            username={username}
          />
        ) : (
          <WelcomeContent
            onNext={_onNext}
            onChangeUsername={_onChangeUsername}
            username={username}
          />
        )}
      </View>
      <View style={{flex: 1}} />
      <View style={styles.footer}>
        <Text>
          <Text style={styles.footerText}>
            By clicking Next, you agree to our{' '}
            <Text style={styles.emphasisText}>
              Terms, Data Policy and Cookies Policy
            </Text>
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: SCREEN_WIDTH * 0.9,
  },
  content: {
    width: '100%',
    height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  footer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {fontWeight: '600', textAlign: 'center'},
  username: {fontWeight: '600', textAlign: 'center'},
  description: {color: '#666', textAlign: 'center', marginVertical: 10},
  changeBtnText: {color: '#318bfb'},
  footerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  emphasisText: {color: '#000'},
});

export {styles};
