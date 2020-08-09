import {FormikProps, FormikValues} from 'formik';
import React, {useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import InputField from './InputField';
import {styles as commonStyles} from './styles';

export interface PhoneInputFieldProps {
  name: string;
  error?: string;
  style?: StyleProp<ViewStyle>;
  showError?: boolean;
  showBorderError?: boolean;
}

const PhoneInputField = ({
  name,
  style,
  showError = true,
  showBorderError = true,
  ...rest
}: PhoneInputFieldProps & TextInputProps & FormikProps<FormikValues>) => {
  const {errors, touched} = rest;

  const _hasError = useMemo(() => {
    return showError && touched && touched[name] && errors && errors[name];
  }, [name, touched, errors, showError]);

  const _borderColor = useMemo(() => {
    if (showBorderError && _hasError) {
      return 'red';
    }
    return '#ddd';
  }, [showBorderError, _hasError]);

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.wrapper, {borderColor: _borderColor}]}>
        <TouchableOpacity style={styles.btnPhoneCode}>
          <Text style={styles.phoneCode}>VN +84</Text>
        </TouchableOpacity>
        <InputField
          style={styles.input}
          name={name}
          showError={false}
          showBorderError={false}
          {...rest}
        />
      </View>
      {_hasError ? (
        <Text style={commonStyles.errorText}>
          {touched[name] && errors[name]}
        </Text>
      ) : undefined}
    </View>
  );
};

export default PhoneInputField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  wrapper: {
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
    marginBottom: 0,
  },
  phoneCode: {fontWeight: '600', color: '#666'},
  btnPhoneCode: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
