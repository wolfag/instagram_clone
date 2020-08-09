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

export interface MyButtonProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  link?: boolean;
  children?: JSX.Element | JSX.Element[];
}

const MyButton = ({
  style,
  labelStyle,
  label,
  link,
  children,
  ...rest
}: MyButtonProps & TouchableOpacityProps) => {
  const btnStyle = link ? styles.link : styles.btn;
  const lbStyle = link ? styles.labelLink : styles.label;
  return (
    <TouchableOpacity style={[btnStyle, styles.container, style]} {...rest}>
      {typeof label === 'string' ? (
        <Text style={[lbStyle, labelStyle]}>{label}</Text>
      ) : undefined}
      {children}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {},
  btn: {
    width: '100%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: '#318bfb',
  },
  link: {backgroundColor: 'transparent'},
  label: {fontWeight: '600', color: '#fff'},
  labelLink: {fontWeight: '600', color: '#000'},
});
