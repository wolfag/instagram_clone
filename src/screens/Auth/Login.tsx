import React, {useCallback, useState, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logoImg from '../../assets/images/logo.png';
import MyButton from '../../components/MyButton';
import Loading from '../../components/Loading';
import {SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT} from '../../constants';
import LoginForm from './components/LoginForm';
import {StackNavigationProp} from '@react-navigation/stack';
import {CommonParamList} from '../../navigation/RootTab';
import LoginWithFacebook from './components/LoginWithFacebook';

type LoginScreenProps = {
  navigation: StackNavigationProp<CommonParamList, 'LoginScreen'>;
};

const LoginScreen = ({navigation}: LoginScreenProps): JSX.Element => {
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [loading, setLoading] = useState<boolean>(false);

  const _onLogin = useCallback(async (values) => {
    console.log({values});
  }, []);

  const _onRegister = useCallback(() => {
    navigation.navigate('RegisterScreen');
  }, [navigation]);

  const _onForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPasswordScreen');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Loading loading={loading} label="Loading..." />
      <View style={styles.languageChooser}>
        <MyButton link style={styles.btnCurLanguage}>
          <Text style={styles.curLanguage}>Tieng Viet (Viet Nam)</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#333" />
        </MyButton>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logoImg} resizeMode="contain" />
        </View>
        <LoginForm onSubmit={_onLogin} />
        <View style={styles.otherOptionsWrapper}>
          <View style={styles.forgotPassword}>
            <Text style={styles.forgetText}>
              Did your forget login information?
            </Text>
            <MyButton
              link
              label="Get helping to login"
              onPress={_onForgotPassword}
            />
          </View>
          <LoginWithFacebook />
        </View>
      </View>

      <MyButton link onPress={_onRegister} style={styles.registerWrapper}>
        <Text style={styles.dontHaveAccTextWrapper}>
          <Text style={styles.dontHaveAccText}>Don't have account?</Text>{' '}
          Register now.
        </Text>
      </MyButton>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
  },
  languageChooser: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCurLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  curLanguage: {
    color: '#333',
  },
  centerContainer: {
    height: SCREEN_HEIGHT - 50 - 40 - STATUS_BAR_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    marginBottom: 20,
  },
  logo: {
    height: 64,
    overflow: 'hidden',
  },
  loginForm: {
    width: SCREEN_WIDTH * 0.9,
  },
  otherOptionsWrapper: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    width: SCREEN_WIDTH * 0.8,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  forgetText: {fontWeight: '500', color: '#333'},
  dontHaveAccTextWrapper: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  dontHaveAccText: {fontWeight: '500', color: '#333'},
});
