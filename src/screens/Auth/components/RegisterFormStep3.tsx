import {Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import moment from 'moment';
import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as yup from 'yup';
import Button from '../../../components/Button';
import {DATE_FORMAT, SCREEN_WIDTH, MIN_AGE, MAX_AGE} from '../../../constants';

export interface RegisterFormValueStep3 {
  birthday: Date;
}

const initialValues: RegisterFormValueStep3 = {
  birthday: new Date(moment().subtract(MIN_AGE, 'year').toString()),
};

export interface RegisterFormStep3Props {
  onSubmit: (
    values: RegisterFormValueStep3,
    formikHelpers: FormikHelpers<RegisterFormValueStep3>,
  ) => void | Promise<any>;
}

const RegisterFormStep3 = ({onSubmit}: RegisterFormStep3Props): JSX.Element => {
  const validationSchema = yup.object().shape({
    birthday: yup.string().label('Birthday').required(),
  });

  const maxDate = useMemo(() => {
    return moment().subtract(MIN_AGE, 'year').format(DATE_FORMAT).toString();
  }, []);

  const minDate = useMemo(() => {
    return moment().subtract(MAX_AGE, 'year').format(DATE_FORMAT).toString();
  }, []);

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {(formProps: FormikProps<FormikValues>) => {
        const {
          handleSubmit,
          isValid,
          dirty,
          handleChange,
          values,
          errors,
          touched,
          setFieldTouched,
        } = formProps;
        const age = moment().diff(moment(values.birthday, DATE_FORMAT), 'year');
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
                <DatePicker
                  date={values.birthday}
                  mode="date"
                  placeholder="select date"
                  format={DATE_FORMAT}
                  minDate={minDate}
                  maxDate={maxDate}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderColor: 'transparent',
                      borderWidth: 0,
                    },
                  }}
                  onDateChange={(date: string) => {
                    handleChange('birthday')(date);
                    setFieldTouched('birthday', true, true);
                  }}
                />
                <View style={styles.currentYear}>
                  <Text>{`${age} Years Old`}</Text>
                </View>
              </View>

              <Text style={styles.guide}>
                Use your own birthday, even if this account is for a business, a
                pet or something else.
              </Text>
            </View>

            <Button
              label="Next"
              disabled={!isValid}
              onPress={handleSubmit}
              style={{width: SCREEN_WIDTH * 0.9}}
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
