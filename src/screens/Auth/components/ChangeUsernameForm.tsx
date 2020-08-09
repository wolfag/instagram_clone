import {Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import React from 'react';
import {Text, View} from 'react-native';
import * as yup from 'yup';
import MyButton from '../../../components/MyButton';
import InputField from '../../../components/InputField';
import {styles as parentStyle} from '../Welcome';

export interface ChangeUsernameFormValue {
  username: string;
}

export interface ChangeUsernameFormProps {
  onSubmit: (
    values: ChangeUsernameFormValue,
    formikHelpers: FormikHelpers<ChangeUsernameFormValue>,
  ) => void | Promise<any>;
}

const ChangeUsernameForm = ({
  onSubmit,
  username,
}: ChangeUsernameFormProps & ChangeUsernameFormValue): JSX.Element => {
  const initialValues: ChangeUsernameFormValue = {username};
  const validationSchema = yup.object().shape(
    {
      username: yup.string().label('Username').required(),
    },
    ['username'],
  );

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
          <View style={parentStyle.content}>
            <View>
              <Text style={parentStyle.title}>CHANGE USERNAME</Text>
            </View>
            <Text style={parentStyle.description}>
              Pick username for your account. You can always change it later.
            </Text>
            <InputField
              name="username"
              autoCapitalize="none"
              placeholder="Username"
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

export default ChangeUsernameForm;
