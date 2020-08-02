import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import waitingImg from '../../assets/icons/waiting.png';
import logoImg from '../../assets/images/logo.png';

import {SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT} from '../../constants';

const LoginScreen = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const _loadingAnimValue = new Animated.Value(0);
  const _animationLoading = () => {
    Animated.timing(_loadingAnimValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 400,
    }).start(() => {
      _loadingAnimValue.setValue(0);
      loading && _animationLoading();
    });
  };

  const _isValid = useCallback(() => {
    if (username?.length > 0 && password?.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [username, password]);

  const _onChangeUsername = useCallback(
    (text: string): void => {
      setUsername(text);
      _isValid();
    },
    [_isValid],
  );

  const _onChangePassword = useCallback(
    (text: string): void => {
      setPassword(text);
      _isValid();
    },
    [_isValid],
  );

  const _onTogglePasswordIcon = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const _passwordIcon = useMemo(() => {
    return hidePassword ? 'eye-off-outline' : 'eye-outline';
  }, [hidePassword]);

  const _onLogin = useCallback(async () => {}, []);
  const _onRegister = useCallback(async () => {}, []);

  console.log({isValid});
  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingWrapper}>
          <View style={styles.loading}>
            <Animated.Image
              source={waitingImg}
              onLayout={_animationLoading}
              style={[
                styles.animateLoading,
                {
                  transform: [
                    {
                      rotate: _loadingAnimValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
            <Text style={styles.logining}>Logining...</Text>
          </View>
        </View>
      )}
      <View style={styles.languageChooser}>
        <TouchableOpacity style={styles.btnCurLanguage}>
          <Text style={styles.curLanguage}>Tieng Viet (Viet Nam)</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logoImg} resizeMode="contain" />
        </View>
        <View style={styles.loginForm}>
          <View style={styles.textInputWrapper}>
            <TextInput
              autoCapitalize="none"
              value={username}
              placeholder="Username, email or phone number"
              onChangeText={_onChangeUsername}
              style={styles.input}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              value={password}
              secureTextEntry={hidePassword}
              placeholder="Password"
              onChangeText={_onChangePassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={_onTogglePasswordIcon}
              style={styles.hidePasswordIcon}>
              <MaterialCommunityIcons
                name={_passwordIcon}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={_onLogin}
            disabled={!isValid}
            style={[styles.btnLogin, {opacity: isValid ? 1 : 0.6}]}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otherOptionsWrapper}>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgetTextWrapper}>
              <Text style={styles.forgetText}>
                Did your forget login information?
              </Text>{' '}
              Get helping to login
            </Text>
          </TouchableOpacity>
          <View style={styles.divideLine}>
            <View style={styles.orTextWrapper}>
              <Text style={styles.orText}>OR</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnLoginWithFacebook}>
            <MaterialCommunityIcons name="facebook" size={20} color="#318bfb" />
            <Text style={styles.loginFacebookText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={_onRegister}
        style={styles.registerWrapper}
        activeOpacity={1}>
        <Text style={styles.dontHaveAccTextWrapper}>
          <Text style={styles.dontHaveAccText}>Don't have account?</Text>{' '}
          Register now.
        </Text>
      </TouchableOpacity>
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
  textInputWrapper: {
    position: 'relative',
    width: '100%',
    height: 44,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 7.5,
  },
  hidePasswordIcon: {
    position: 'absolute',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
    top: (44 - 30) / 2,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  btnLogin: {
    marginTop: 7.5,
    width: '100%',
    height: 44,
    borderRadius: 5,
    backgroundColor: '#318bfb',
    justifyContent: 'center',
    alignItems: 'center',
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
  loadingWrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 99,
  },
  loading: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  animateLoading: {width: 30, height: 30, marginRight: 10},
  logining: {
    fontWeight: '500',
  },
  login: {fontSize: 16, color: '#fff', fontWeight: '500'},
  forgetTextWrapper: {textAlign: 'center', fontSize: 12, fontWeight: '600'},
  forgetText: {fontWeight: '500', color: '#333'},
  loginFacebookText: {color: '#318bfb', fontWeight: 'bold'},
  dontHaveAccTextWrapper: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  dontHaveAccText: {fontWeight: '500', color: '#333'},
});
