import {Formik, FormikProps, FormikValues, FormikHelpers} from 'formik';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';
import Button from '../../../components/Button';
import DatePicker from '../../../components/DatePicker';
import {SCREEN_WIDTH} from '../../../constants';

export interface RegisterFormValueStep3 {
  date: number;
  month: number;
  year: number;
}

const initialValues: RegisterFormValueStep3 = {date: 1, month: 1, year: 2020};

export interface RegisterFormStep3Props {
  onSubmit: (
    values: RegisterFormValueStep3,
    formikHelpers: FormikHelpers<RegisterFormValueStep3>,
  ) => void | Promise<any>;
}

const RegisterFormStep3 = ({onSubmit}: RegisterFormStep3Props): JSX.Element => {
  const validationSchema = yup.object().shape({
    date: yup.number().min(1).max(31).required(),
    month: yup.string().min(0).max(11).required(),
    year: yup.number().min(1900).max(2020).required(),
  });

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {(formProps: FormikProps<FormikValues>) => {
        const {handleSubmit, isValid, dirty, handleChange, values} = formProps;
        return (
          <View style={styles.formContainer}>
            <View>
              <Image
                style={styles.birthdayIcon}
                source={require('../../../assets/images/rocket.png')}
              />
            </View>
            <Text style={styles.formTitle}>ADD BIRTHDAY</Text>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>
                This won't be part of your public profile. Why do I need to
                provide my birthday?
              </Text>
            </View>
            <View style={styles.birthdayInputWrapper}>
              <View style={styles.birthdayInput}>
                <Text>{JSON.stringify(values)}</Text>
                <View style={styles.currentYear}>
                  <Text>20 Years Old</Text>
                </View>
              </View>

              <Text style={styles.guide}>
                Use your own birthday, even if this account is for a business, a
                pet or something else.
              </Text>
            </View>

            <Button
              label="Next"
              disabled={!isValid || !dirty}
              onPress={handleSubmit}
              style={{width: SCREEN_WIDTH * 0.9}}
            />

            <DatePicker
              defaultDate={1}
              defaultMonth="Jan"
              defaultYear={2020}
              onDateChange={(date: number) => {
                handleChange('date')(`${date}`);
              }}
              onMonthIndexChange={(index: number) => {
                handleChange('month')(`${index}`);
              }}
              onYearChange={(year: number) => {
                handleChange('year')(`${year}`);
              }}
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default RegisterFormStep3;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    display: 'flex',
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
  formTitle: {marginVertical: 15, fontWeight: '500', fontSize: 18},
  descriptionWrapper: {width: SCREEN_WIDTH * 0.7, marginBottom: 15},
  description: {
    textAlign: 'center',
  },
  guide: {
    marginVertical: 10,
    textAlign: 'center',
    color: '#666',
    alignSelf: 'center',
  },
});
