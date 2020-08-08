import {FormikProps, FormikValues} from 'formik';
import React, {useCallback, useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles as commonStyles} from './styles';

export interface CheckboxProps {
  name: string;
  style?: StyleProp<ViewStyle>;
  label?: string;
  showError?: boolean;
}

const Checkbox = ({
  style,
  label,
  name,
  values,
  errors,
  touched,
  setFieldValue,
  showError,
}: CheckboxProps & FormikProps<FormikValues>) => {
  const _checkColor = useMemo(() => {
    const value = values[name];
    return value ? '#318bfb' : '#666';
  }, [values, name]);
  const _checkName = useMemo(() => {
    const value = values[name];
    return value ? 'check-square' : 'square';
  }, [values, name]);

  const _onToggle = useCallback(() => {
    setFieldValue(name, !values[name]);
  }, [setFieldValue, values, name]);

  return (
    <View style={[styles.checkboxContainer, style]}>
      <TouchableOpacity onPress={_onToggle} style={[styles.checkboxContainer]}>
        <Feather name={_checkName} color={_checkColor} size={20} />
        <Text style={[styles.label, {color: _checkColor}]}>{label}</Text>
      </TouchableOpacity>
      {showError && touched && touched[name] && errors && errors[name] ? (
        <Text style={commonStyles.errorText}>
          {touched[name] && errors[name]}
        </Text>
      ) : undefined}
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {},
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {color: '#666', marginLeft: 10, textAlignVertical: 'center'},
});
