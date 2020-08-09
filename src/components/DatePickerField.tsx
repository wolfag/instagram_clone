import {FormikProps, FormikValues} from 'formik';
import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import {styles as commonStyles} from './styles';
import {DATE_FORMAT} from '../constants';

export interface DatePickerFieldProps {
  name: string;
  error?: string;
  style?: StyleProp<ViewStyle>;
  showError?: boolean;
  format?: string;
}

const DatePickerField = ({
  name,
  values,
  setFieldValue,
  setFieldTouched,
  style,
  showError = true,
  format = DATE_FORMAT,
  ...rest
}: DatePickerFieldProps & FormikProps<FormikValues>) => {
  const {errors, touched} = rest;
  return (
    <View style={[styles.container, style]}>
      <DatePicker
        date={values[name]}
        onDateChange={(date: string) => {
          setFieldValue(name, new Date(moment(date, format).toString()), true);
          setFieldTouched(name, true, true);
        }}
        format={format}
        {...rest}
      />
      {showError && touched && touched[name] && errors && errors[name] ? (
        <Text style={commonStyles.errorText}>
          {touched[name] && errors[name]}
        </Text>
      ) : undefined}
    </View>
  );
};

export default DatePickerField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
});
