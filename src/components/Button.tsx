import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface ButtonProps {
  style?: object;
  label?: string;
  link?: boolean;
  children?: JSX.Element;
}

const Button = ({style, label, link, children, ...rest}: ButtonProps) => {
  const btnStyle = link ? styles.link : styles.btn;
  const labelStyle = link ? styles.labelLink : styles.label;
  return (
    <TouchableOpacity style={[btnStyle, styles.container, style]} {...rest}>
      {typeof label === 'string' ? (
        <Text style={labelStyle}>{label}</Text>
      ) : undefined}
      {children}
    </TouchableOpacity>
  );
};

export default Button;

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
