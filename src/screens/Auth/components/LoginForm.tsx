import {Formik, FormikProps, FormikValues, FormikHelpers} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import InputField from '../../../components/InputField';
import {SCREEN_WIDTH} from '../../../constants';
import MyButton from '../../../components/MyButton';

export interface LoginFormValue {
  username: string;
  password: string;
}

const initialValues: LoginFormValue = {username: '', password: ''};

export interface LoginFormProps {
  loading?: boolean;
  onSubmit: (
    values: LoginFormValue,
    formikHelpers: FormikHelpers<LoginFormValue>,
  ) => void | Promise<any>;
}

const LoginForm = ({onSubmit, loading}: LoginFormProps): JSX.Element => {
  const validationSchema = yup.object().shape({
    username: yup.string().label('Username').required(),
    password: yup
      .string()
      .label('Password')
      .min(6, 'Password must be more than 6 character')
      .required(),
  });

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {(formProps: FormikProps<FormikValues>) => {
        const {isValid, dirty, handleSubmit} = formProps;
        return (
          <View style={styles.container}>
            <InputField
              name="username"
              autoCapitalize="none"
              placeholder="Username, email or phone number"
              {...formProps}
            />
            <InputField
              name="password"
              placeholder="Password"
              password={true}
              {...formProps}
            />
            <MyButton
              onPress={handleSubmit}
              disabled={!isValid || !dirty}
              label="Login"
              loading={loading}
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
  },
});
