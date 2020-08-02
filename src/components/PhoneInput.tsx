import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from './Input';

export interface PhoneInputProps {
  name: string;
  values: object;
  errors?: object;
  touched: object;
  error?: string;
  style?: object;
  showError?: boolean;
}

const PhoneInput = ({
  name,
  values,
  errors,
  touched,
  style,
  showError = true,
  ...rest
}: PhoneInputProps) => {
  console.log({values, touched, errors});
  return (
    <View style={style}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnPhoneCode}>
          <Text style={styles.phoneCode}>VN +84</Text>
        </TouchableOpacity>
        <Input
          style={styles.input}
          name={name}
          values={values}
          showError={false}
          {...rest}
        />
      </View>
      {showError && touched[name] && errors[name] ? (
        <Text style={styles.errorText}>{touched[name] && errors[name]}</Text>
      ) : undefined}
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  phoneCode: {fontWeight: '600', color: '#666'},
  btnPhoneCode: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
  },
});
