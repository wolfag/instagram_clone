import React, {useCallback, useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface InputProps {
  name: string;
  values: object;
  errors?: object;
  touched?: object;
  style?: object;
  showError?: boolean;
  setFieldValue?: any;
  handleChange?: any;
  handleBlur?: any;
  setFieldTouched?: any;
  allowClear?: boolean;
  password?: boolean;
}

const Input = ({
  name,
  values,
  errors,
  touched,
  style,
  showError = true,
  setFieldValue,
  handleChange,
  handleBlur,
  setFieldTouched,
  allowClear = true,
  password,
  ...rest
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true);

  const _onClear = useCallback(() => {
    setFieldValue(name, '');
  }, [setFieldValue, name]);

  const _onBlur = useCallback(() => {
    handleBlur(name);
    setFieldTouched(name, true, true);
  }, [handleBlur, name, setFieldTouched]);

  const _onChange = useCallback(
    (text: string) => {
      handleChange(name)(text);
    },
    [handleChange, name],
  );

  const _onTogglePasswordIcon = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const _passwordIcon = useMemo(() => {
    return hidePassword ? 'eye-off-outline' : 'eye-outline';
  }, [hidePassword]);

  return (
    <View style={style}>
      <View style={styles.container}>
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
      {showError && touched && touched[name] && errors && errors[name] ? (
        <Text style={styles.errorText}>{touched[name] && errors[name]}</Text>
      ) : undefined}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
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
  errorText: {
    color: 'red',
    marginVertical: 5,
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
