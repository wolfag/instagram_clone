import React, {useState, useCallback, useMemo} from 'react';
import * as yup from 'yup';
import {SafeAreaView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, STATUS_BAR_HEIGHT} from '../../constants';
import RegisterFormStep1 from './components/RegisterFormStep1';
import RegisterFormStep2 from './components/RegisterFormStep2';

export interface RegisterFormValueStep3 {
  date: number;
  month: number;
  year: number;
}

const RegisterScreen = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [savePassword, setSavePassword] = useState<boolean>(true);
  const [birthday, setBirthday] = useState<RegisterFormValueStep3>({
    date: 1,
    month: 1,
    year: 2020,
  });

  const [step, setStep] = useState<number>(1);
  const _onNextStep = useCallback((): void => {});

  const Schemastep3 = yup.object().shape({});

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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="height"
        style={[
          styles.centerContainer,
          {
            height: _height,
            width: _width,
          },
        ]}>
        {step === 1 && (
          <RegisterFormStep1
            onSubmit={(e) => {
              console.log({e});
              setStep(step + 1);
            }}
          />
        )}
        {step === 2 && (
          <RegisterFormStep2
            onSubmit={(e) => {
              console.log({e});
            }}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  centerContainer: {
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameTypesWrapper: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationTabs: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
    position: 'relative',
  },
  activeTypeLine: {
    height: 1,
    width: '50%',
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
  },
  navigationTab: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  tabTitle: {
    fontWeight: '600',
  },
  usernameForm: {
    marginVertical: 20,
    width: '100%',
  },
  usePhone: {
    width: '100%',
  },
  useEmail: {
    width: '100%',
  },
  inputWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 44,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(242,242,242)',
  },
  loadingIcon: {
    width: 36,
    height: 36,
  },
  btnPhoneCode: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 80,
  },
  phoneCodeTitleWrapper: {
    paddingVertical: 5,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    paddingHorizontal: 10,
  },
  inputPhone: {
    width: '100%',
    height: 44,
    fontSize: 16,
    paddingRight: 44,
    paddingLeft: 90,
    backgroundColor: 'rgb(242,242,242)',
  },
  btnReset: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
  },
  btnNextStep: {
    width: '100%',
    height: 46,
    backgroundColor: '#318bfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 5,
  },

  //STEP2 STYLES
  step2Wrapper: {
    width: '100%',
  },
  step2Title: {
    marginVertical: 25,
    alignItems: 'center',
  },
  step2FormWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formGroupWrapper: {
    marginVertical: 7.5,
    width: '100%',
  },
  savePassword: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
    borderRadius: 2,
    borderWidth: 3,
  },
  syncContactDescription: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0.05 * SCREEN_WIDTH,
  },
  //STEP 3 STYLES
  step3ScrollView: {
    width: '100%',
  },
  step3Wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  birthdayIcon: {
    height: 64,
    width: 64,
  },
  birthdayInputWrapper: {
    width: '100%',
    paddingHorizontal: 0.05 * SCREEN_WIDTH,
  },
  birthdayInput: {
    position: 'relative',
    backgroundColor: 'rgb(242,242,242)',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  currentYear: {
    position: 'absolute',
    paddingHorizontal: 15,
    height: 44,
    justifyContent: 'center',
    top: 0,
    right: 0,
  },
  //
  btnLogin: {
    height: 50,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
