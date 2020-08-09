import {FormikProps, FormikValues} from 'formik';
import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {styles as commonStyles} from './styles';

export interface DatePickerFieldProps {
  name: string;
  error?: string;
  style?: StyleProp<ViewStyle>;
  showError?: boolean;
}

const DatePickerField = ({
  name,
  values,
  handleChange,
  setFieldTouched,
  style,
  showError = true,
  ...rest
}: DatePickerFieldProps & FormikProps<FormikValues>) => {
  const {errors, touched} = rest;
  return (
    <View style={[styles.container, style]}>
      <DatePicker
        date={values[name]}
        onDateChange={(date: string) => {
          handleChange(name)(date);
          setFieldTouched(name, true, true);
        }}
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
