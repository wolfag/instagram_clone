import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logoImg from '../../assets/images/logo.png';
import Loading from '../../components/Loading';
import MyButton from '../../components/MyButton';
import {SCREEN_HEIGHT} from '../../constants';
import {Body, Container, Footer, Header} from '../../layout';
import {CommonParamList} from '../../navigation/RootTab';
import LoginForm from './components/LoginForm';
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
    <Container>
      <Loading loading={loading} label="Loading..." />
      <Header>
        <MyButton link style={styles.btnCurLanguage}>
          <Text style={styles.curLanguage}>Tieng Viet (Viet Nam)</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#333" />
        </MyButton>
      </Header>
      <Body center>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logoImg} resizeMode="contain" />
        </View>
        <LoginForm onSubmit={_onLogin} />
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
      </Body>
      <Footer showSeparator>
        <MyButton link onPress={_onRegister}>
          <Text style={styles.dontHaveAccTextWrapper}>
            <Text style={styles.dontHaveAccText}>Don't have account?</Text>{' '}
            Register now.
          </Text>
        </MyButton>
      </Footer>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
  },
  btnCurLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  curLanguage: {
    color: '#333',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 64,
    overflow: 'hidden',
  },
  forgotPassword: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetText: {fontWeight: '500', color: '#333'},
  dontHaveAccTextWrapper: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  dontHaveAccText: {fontWeight: '500', color: '#333'},
});
