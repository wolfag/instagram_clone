import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikValues} from 'formik';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MyButton from '../../components/MyButton';
import Body from '../../layout/Body';
import Container from '../../layout/Container';
import Footer from '../../layout/Footer';
import {CommonParamList} from '../../navigation/RootTab';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import LoginWithFacebook from './components/LoginWithFacebook';
import Loading from '../../components/Loading';

type ForgotPasswordScreenRouteProp = RouteProp<
  CommonParamList,
  'ForgotPasswordScreen'
>;

type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  CommonParamList,
  'ForgotPasswordScreen'
>;

type ForgotPasswordScreenProps = {
  navigation: ForgotPasswordScreenNavigationProp;
  route: ForgotPasswordScreenRouteProp;
};

const ForgotPasswordScreen = ({
  navigation,
}: ForgotPasswordScreenProps): JSX.Element => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Login Help',
      headerBackTitle: '',
    });
  }, [navigation]);

  const [loading, setLoading] = useState<boolean>(false);

  const _onSubmit = useCallback((data: FormikValues) => {
    console.log({data});
    setLoading(true);
  }, []);

  return (
    <Container>
      <Loading loading={loading} label="Checking..." />
      <Body contentContainerStyle={styles.body}>
        <ForgotPasswordForm onSubmit={_onSubmit} />
        <LoginWithFacebook style={styles.loginWithFacebook} />
      </Body>
      <Footer showSeparator={false}>
        <MyButton link label="Need more help?" labelStyle={styles.needHelp} />
      </Footer>
    </Container>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  body: {flexGrow: 1, justifyContent: 'center'},
  needHelp: {
    color: '#318bfb',
    fontSize: 13,
    fontWeight: 'normal',
  },
  loginWithFacebook: {
    marginTop: 10,
  },
});
