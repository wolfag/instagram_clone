import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import Loading from '../../components/Loading';
import MyButton from '../../components/MyButton';
import {SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT} from '../../constants';
import {Body, Container, Footer} from '../../layout';
import {CommonParamList} from '../../navigation/RootTab';
import RegisterFormStep1, {
  RegisterFormValueStep1,
} from './components/RegisterFormStep1';
import RegisterFormStep2, {
  RegisterFormValueStep2,
} from './components/RegisterFormStep2';
import RegisterFormStep3, {
  RegisterFormValueStep3,
} from './components/RegisterFormStep3';
import {WelcomeScreenParams} from './Welcome';

type RegisterScreenProps = {
  navigation: StackNavigationProp<CommonParamList, 'RegisterScreen'>;
};

const RegisterScreen = ({navigation}: RegisterScreenProps): JSX.Element => {
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [loading, setLoading] = useState<boolean>(false);

  const [formDataStep1, setFormDataStep1] = useState<RegisterFormValueStep1>({
    phone: '',
    email: '',
  });
  const [formDataStep2, setFormDataStep2] = useState<RegisterFormValueStep2>({
    fullname: '',
    password: '',
    savePassword: false,
  });
  const [formDataStep3, setFormDataStep3] = useState<RegisterFormValueStep3>({
    birthday: new Date(),
  });

  const [step, setStep] = useState<number>(1);

  const _onSubmitStep1 = useCallback(
    (data: RegisterFormValueStep1) => {
      setFormDataStep1(data);
      setStep(step + 1);
    },
    [step],
  );
  const _onSubmitStep2 = useCallback(
    (data: RegisterFormValueStep2) => {
      setFormDataStep2(data);
      setStep(step + 1);
    },
    [step],
  );
  const _onSubmitStep3 = useCallback(
    (data: RegisterFormValueStep3) => {
      setFormDataStep3(data);
      const formData: WelcomeScreenParams = {
        ...formDataStep1,
        ...formDataStep2,
        ...formDataStep3,
      };
      navigation.navigate('WelcomeScreen', formData);
    },
    [navigation, formDataStep1, formDataStep2, formDataStep3],
  );

  const _onLogin = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  const _height = useMemo(() => {
    if (step > 1) {
      if (step === 2) {
        return SCREEN_HEIGHT - 100 - STATUS_BAR_HEIGHT;
      }
      return 'auto';
    }
    return SCREEN_HEIGHT - 50 - STATUS_BAR_HEIGHT;
  }, [step]);
  const _width = useMemo(() => {
    return step === 3 ? '100%' : 0.9 * SCREEN_WIDTH;
  }, [step]);

  return (
    <Container>
      <Loading loading={loading} />
      <Body>
        <KeyboardAvoidingView
          behavior="height"
          style={[
            styles.content,
            {
              height: _height,
              width: _width,
            },
          ]}>
          {step === 1 && <RegisterFormStep1 onSubmit={_onSubmitStep1} />}
          {step === 2 && <RegisterFormStep2 onSubmit={_onSubmitStep2} />}
          {step === 3 && <RegisterFormStep3 onSubmit={_onSubmitStep3} />}
        </KeyboardAvoidingView>
      </Body>
      <Footer showSeparator>
        <MyButton link onPress={_onLogin}>
          <Text style={styles.alreadyHaveAccText}>
            Already have account? <Text style={styles.loginText}>Login</Text>.
          </Text>
        </MyButton>
      </Footer>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyHaveAccText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  loginText: {
    fontWeight: '600',
    color: '#000',
  },
});
