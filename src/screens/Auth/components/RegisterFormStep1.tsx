import {Formik, FormikProps, FormikValues, FormikHelpers} from 'formik';
import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PhoneInput from '../../../components/PhoneInput';

export interface RegisterFormValueStep1 {
  phone: string;
  email: string;
}

const initialValues: RegisterFormValueStep1 = {phone: '', email: ''};

export interface RegisterFormStep1Props {
  onSubmit: (
    values: RegisterFormValueStep1,
    formikHelpers: FormikHelpers<RegisterFormValueStep1>,
  ) => void | Promise<any>;
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
      {(formProps: FormikProps<FormikValues>) => {
        const {handleSubmit, isValid, dirty} = formProps;
        return (
          <>
            <View>
              <Feather name="user" size={100} />
            </View>
            <View style={styles.formBody}>
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

                <View
                  style={[styles.activeTypeLine, {left: _activeTypeLine}]}
                />
              </View>

              <View style={styles.formFields}>
                {tab === 1 && (
                  <PhoneInput
                    name="phone"
                    autoFocus={true}
                    placeholder="Phone"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    {...formProps}
                  />
                )}
                {tab === 2 && (
                  <Input
                    name="email"
                    autoFocus={true}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="done"
                    {...formProps}
                  />
                )}

                <Button
                  disabled={!isValid || !dirty}
                  label="Next"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </>
        );
      }}
    </Formik>
  );
};

export default RegisterFormStep1;

const styles = StyleSheet.create({
  formBody: {
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
  formFields: {
    marginVertical: 20,
    width: '100%',
  },
});
