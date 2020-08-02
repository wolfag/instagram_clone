import {Formik, FormikProps} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import Input from '../../../components/Input';
import {SCREEN_WIDTH} from '../../../constants';
import Button from '../../../components/Button';

export interface LoginFormValue {
  username: string;
  password: string;
}

const initialValues = {username: '', password: ''};

export interface LoginFormProps {
  onSubmit: any;
}

const LoginForm = ({onSubmit}: LoginFormProps): JSX.Element => {
  const validationSchema = yup.object().shape(
    {
      username: yup.string().label('Username').required(),
      password: yup.string().label('Password').required(),
    },
    ['username', 'password'],
  );

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
      }: FormikProps<LoginFormValue>) => {
        return (
          <View style={styles.container}>
            <Input
              name="username"
              autoCapitalize="none"
              placeholder="Username, email or phone number"
              style={styles.input}
              {...rest}
            />
            <Input
              name="password"
              placeholder="Password"
              password={true}
              style={styles.input}
              {...rest}
            />
            <Button
              onPress={handleSubmit}
              disabled={!isValid || !dirty}
              label="Login"
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
  loginText: {fontSize: 16, color: '#fff', fontWeight: '500'},
  btnLogin: {
    marginTop: 7.5,
    width: '100%',
    height: 44,
    borderRadius: 5,
    backgroundColor: '#318bfb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {marginVertical: 7.5},
});
