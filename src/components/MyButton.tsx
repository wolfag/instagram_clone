import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import LoadingAmin from './LoadingAnim';

export interface MyButtonProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  link?: boolean;
  children?: JSX.Element | JSX.Element[];
  loading?: boolean;
}

const MyButton = ({
  style,
  labelStyle,
  label,
  link,
  children,
  disabled,
  loading = false,
  ...rest
}: MyButtonProps & TouchableOpacityProps) => {
  const btnStyle: StyleProp<ViewStyle> = link ? styles.link : styles.btn;
  const lbStyle: StyleProp<TextStyle> = link ? styles.labelLink : styles.label;
  const opacity: number = disabled ? 0.6 : 1;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[btnStyle, styles.container, {opacity}, style]}
      {...rest}>
      {loading ? (
        <LoadingAmin loading={loading} size={20} />
      ) : typeof label === 'string' ? (
        <Text style={[lbStyle, labelStyle]}>{label}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', width: '100%'},
  btn: {
    height: 46,
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: '#318bfb',
  },
  link: {backgroundColor: 'transparent'},
  label: {fontWeight: '600', color: '#fff'},
  labelLink: {fontWeight: '600', color: '#000'},
});
