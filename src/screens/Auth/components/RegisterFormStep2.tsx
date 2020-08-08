import {Formik, FormikProps, FormikValues, FormikHelpers} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';

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
    fullname: yup.string().label('Fullname').matches(/\w+/).required(),
    password: yup
      .string()
      .label('Password')
      .min(7, 'Password must be more than 6 character')
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
              <Input
                name="fullname"
                autoCorrect={false}
                autoCapitalize="none"
                autoFocus={true}
                placeholder="Full name"
                keyboardType="default"
                returnKeyType="done"
                {...formProps}
              />
              <Input
                name="password"
                password={true}
                placeholder="Password"
                keyboardType="default"
                returnKeyType="done"
                {...formProps}
              />
              <Checkbox
                name="savePassword"
                label="Save password"
                {...formProps}
              />

              <Button
                onPress={handleSubmit}
                disabled={!isValid || !dirty}
                label="Continue Without Syncing Contacts"
              />

              <Button link>
                <Text style={styles.continueWithoutSyn}>
                  Continue Without Syncing Contacts
                </Text>
              </Button>
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
