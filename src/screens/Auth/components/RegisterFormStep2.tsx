import {Formik, FormikProps, FormikValues, FormikHelpers} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';
import MyButton from '../../../components/MyButton';
import CheckBoxField from '../../../components/CheckBoxField';
import InputField from '../../../components/InputField';

export interface RegisterFormValueStep2 {
  fullname: string;
  password: string;
  savePassword: boolean;
}

const initialValues: RegisterFormValueStep2 = {
  fullname: '',
  password: '',
  savePassword: false,
};

export interface RegisterFormStep2Props {
  onSubmit: (
    values: RegisterFormValueStep2,
    formikHelpers: FormikHelpers<RegisterFormValueStep2>,
  ) => void | Promise<any>;
}

const RegisterFormStep2 = ({onSubmit}: RegisterFormStep2Props): JSX.Element => {
  const validationSchema = yup.object().shape({
    fullname: yup
      .string()
      .label('Fullname')
      .min(6, 'Fullname must be more than 6 character')
      .matches(/\w+/)
      .required(),
    password: yup
      .string()
      .label('Password')
      .min(6, 'Password must be more than 6 character')
      .required(),
    savePassword: yup.boolean(),
  });

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
          <View style={styles.formContainer}>
            <View style={styles.formTitle}>
              <Text style={styles.titleText}>NAME AND PASSWORD</Text>
            </View>
            <View style={styles.formFields}>
              <InputField
                name="fullname"
                autoCorrect={false}
                autoCapitalize="none"
                autoFocus={true}
                placeholder="Full name"
                keyboardType="default"
                returnKeyType="done"
                {...formProps}
              />
              <InputField
                name="password"
                password={true}
                placeholder="Password"
                keyboardType="default"
                returnKeyType="done"
                {...formProps}
              />
              <CheckBoxField
                name="savePassword"
                label="Save password"
                {...formProps}
              />

              <MyButton
                onPress={handleSubmit}
                disabled={!isValid || !dirty}
                label="Continue Without Syncing Contacts"
              />

              <MyButton link>
                <Text style={styles.continueWithoutSyn}>
                  Continue Without Syncing Contacts
                </Text>
              </MyButton>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default RegisterFormStep2;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  formTitle: {
    marginVertical: 25,
    alignItems: 'center',
  },
  titleText: {fontWeight: 'bold'},
  formFields: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueWithoutSyn: {fontWeight: '600', color: '#318bfb'},
});
