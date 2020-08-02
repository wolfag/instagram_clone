import React, {useCallback, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logoImg from '../../assets/images/logo.png';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import {SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT} from '../../constants';
import {navigation} from '../../navigation/rootNavigation';
import LoginForm from './components/LoginForm';

const LoginScreen = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  const _onLogin = useCallback(async (values) => {
    console.log({values});
  }, []);
  const _onRegister = useCallback(() => {
    navigation.navigate('RegisterScreen');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Loading loading={loading} label="Loading..." />
      <View style={styles.languageChooser}>
        <Button link style={styles.btnCurLanguage}>
          <Text style={styles.curLanguage}>Tieng Viet (Viet Nam)</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#333" />
        </Button>
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
            <Button link label="Get helping to login" />
          </View>
          <View style={styles.divideLine}>
            <View style={styles.orTextWrapper}>
              <Text style={styles.orText}>OR</Text>
            </View>
          </View>
          <Button link style={styles.btnLoginWithFacebook}>
            <MaterialCommunityIcons name="facebook" size={20} color="#318bfb" />
            <Text style={styles.loginFacebookText}>Login with Facebook</Text>
          </Button>
        </View>
      </View>

      <Button link onPress={_onRegister} style={styles.registerWrapper}>
        <Text style={styles.dontHaveAccTextWrapper}>
          <Text style={styles.dontHaveAccText}>Don't have account?</Text>{' '}
          Register now.
        </Text>
      </Button>
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
  divideLine: {
    marginVertical: 10,
    position: 'relative',
    height: 2,
    width: '100%',
    backgroundColor: '#ddd',
  },
  orTextWrapper: {
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: (2 - 20) / 2,
    left: (SCREEN_WIDTH * 0.9 - 40) / 2,
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  orText: {color: '#333', fontWeight: '600'},
  btnLoginWithFacebook: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  loading: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  forgetText: {fontWeight: '500', color: '#333'},
  loginFacebookText: {color: '#318bfb', fontWeight: 'bold'},
  dontHaveAccTextWrapper: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  dontHaveAccText: {fontWeight: '500', color: '#333'},
});
