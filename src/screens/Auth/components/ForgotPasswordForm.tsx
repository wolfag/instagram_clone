import {Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';
import InputField from '../../../components/InputField';
import MyButton from '../../../components/MyButton';

export interface ForgotPasswordFormValue {
  userInput: string;
}

export interface ForgotPasswordFormProps {
  onSubmit: (
    values: ForgotPasswordFormValue,
    formikHelpers: FormikHelpers<ForgotPasswordFormValue>,
  ) => void | Promise<any>;
}

const ForgotPasswordForm = ({
  onSubmit,
}: ForgotPasswordFormProps): JSX.Element => {
  const initialValues: ForgotPasswordFormValue = {userInput: ''};
  const validationSchema = yup.object().shape({
    userInput: yup
      .string()
      .label('This input')
      .min(6, 'Your input must be more than 6 character')
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
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Find Your Account</Text>
            </View>
            <Text style={styles.description}>
              Enter your Instagram username or the email or phone number linked
              to account.
            </Text>
            <InputField
              name="userInput"
              autoCapitalize="none"
              placeholder="Username, email or phone"
              {...formProps}
            />
            <MyButton
              onPress={handleSubmit}
              disabled={!isValid || !dirty}
              label="Next"
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default ForgotPasswordForm;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {textAlign: 'center', fontSize: 24},
  description: {color: '#666', textAlign: 'center', marginVertical: 15},
});
