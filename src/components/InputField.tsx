import {FormikProps, FormikValues} from 'formik';
import React, {useCallback, useMemo, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles as commonStyles} from './styles';

export interface InputFieldProps {
  name: string;
  style?: StyleProp<ViewStyle>;
  showError?: boolean;
  showBorderError?: boolean;
  allowClear?: boolean;
  password?: boolean;
}

const InputField = ({
  name,
  values,
  errors,
  touched,
  style,
  showError = true,
  showBorderError = true,
  setFieldValue,
  handleChange,
  handleBlur,
  setFieldTouched,
  allowClear = true,
  password,
  ...rest
}: InputFieldProps & TextInputProps & FormikProps<FormikValues>) => {
  const [hidePassword, setHidePassword] = useState(true);

  const _onClear = useCallback(() => {
    setFieldValue && setFieldValue(name, '');
  }, [setFieldValue, name]);

  const _onBlur = useCallback(() => {
    handleBlur && handleBlur(name);
    setFieldTouched && setFieldTouched(name, true, true);
  }, [handleBlur, name, setFieldTouched]);

  const _onChange = useCallback(
    (text: string) => {
      handleChange && handleChange(name)(text);
    },
    [handleChange, name],
  );

  const _onTogglePasswordIcon = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const _passwordIcon = useMemo(() => {
    return hidePassword ? 'eye-off-outline' : 'eye-outline';
  }, [hidePassword]);

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
        <TextInput
          style={styles.input}
          value={values[name]}
          onBlur={_onBlur}
          onChangeText={_onChange}
          secureTextEntry={password && hidePassword}
          {...rest}
        />

        {!password && allowClear && values[name] ? (
          <TouchableOpacity onPress={_onClear} style={styles.tailIcon}>
            <Feather name="x" size={20} color="#333" />
          </TouchableOpacity>
        ) : undefined}
        {password && (
          <TouchableOpacity
            onPress={_onTogglePasswordIcon}
            style={styles.tailIcon}>
            <MaterialCommunityIcons
              name={_passwordIcon}
              size={20}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>
      {_hasError ? (
        <Text style={commonStyles.errorText}>
          {touched[name] && errors[name]}
        </Text>
      ) : undefined}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 44,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(242,242,242)',
  },
  tailIcon: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
