import {Formik, FormikProps} from 'formik';
import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants';
import Input from '../../../components/Input';
import PhoneInput from '../../../components/PhoneInput';

export interface RegisterFormValueStep1 {
  phone: string;
  email: string;
}

const initialValues = {phone: '', email: ''};

export interface RegisterFormStep1Props {
  onSubmit: any;
}

const RegisterFormStep1 = ({onSubmit}: RegisterFormStep1Props): JSX.Element => {
  const [tab, setTab] = useState<number>(1);

  const validationSchema = useMemo(() => {
    return yup.object().shape(
      {
        phone: yup.string().when('email', {
          is: (_email: string) => !_email || tab === 1,
          then: yup
            .string()
            .label('Phone')
            .min(6)
            .matches(/\d{6,}/)
            .required(),
        }),
        email: yup.string().when('phone', {
          is: (_phone: string) => !_phone || tab === 2,
          then: yup.string().label('Email').email().required(),
        }),
      },
      ['phone', 'email'],
    );
  }, [tab]);

  const _onToggleTab = useCallback(
    (type: number): any => (): void => {
      setTab(type);
    },
    [],
  );

  const _phoneColor = useMemo(() => {
    return tab === 1 ? '#000' : '#666';
  }, [tab]);

  const _emailColor = useMemo(() => {
    return tab === 2 ? '#000' : '#666';
  }, [tab]);

  const _activeTypeLine = useMemo(() => {
    return tab === 1 ? 0 : '50%';
  }, [tab]);

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {({
        handleSubmit,
        isValid,
        dirty,
        ...rest
      }: FormikProps<RegisterFormValueStep1>) => (
        <>
          <View>
            <Feather name="user" size={100} />
          </View>
          <View style={styles.usernameTypesWrapper}>
            <View style={styles.navigationTabs}>
              <TouchableOpacity
                onPress={_onToggleTab(1)}
                activeOpacity={0.8}
                style={styles.navigationTab}>
                <Text style={[styles.tabTitle, {color: _phoneColor}]}>
                  PHONE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={_onToggleTab(2)}
                activeOpacity={0.8}
                style={styles.navigationTab}>
                <Text style={[styles.tabTitle, {color: _emailColor}]}>
                  EMAIL
                </Text>
              </TouchableOpacity>

              <View style={[styles.activeTypeLine, {left: _activeTypeLine}]} />
            </View>

            <View style={styles.usernameForm}>
              {tab === 1 && (
                <View style={styles.usePhone}>
                  <PhoneInput
                    name="phone"
                    autoFocus={true}
                    placeholder="Phone"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    {...rest}
                  />
                </View>
              )}
              {tab === 2 && (
                <View style={styles.useEmail}>
                  <Input
                    name="email"
                    autoFocus={true}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="done"
                    {...rest}
                  />
                </View>
              )}

              <TouchableOpacity
                style={[styles.btnNextStep]}
                disabled={!isValid || !dirty}
                onPress={handleSubmit}>
                <Animated.Text style={styles.nextText}>Next</Animated.Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default RegisterFormStep1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
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
    display: 'flex',
  },
  navigationTabs: {
    display: 'flex',
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
  phoneCode: {fontWeight: '600', color: '#666'},
  nextText: {fontWeight: '600', color: '#fff'},
});
