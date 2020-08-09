import React, {useMemo} from 'react';
import {StyleSheet, StyleProp, ViewStyle, View, ViewProps} from 'react-native';

type FooterProps = {
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  showSeparator?: boolean;
};

const Footer = ({
  children,
  style,
  showSeparator = true,
  ...rest
}: FooterProps & ViewProps): JSX.Element => {
  const separatorStyle = useMemo(() => {
    return showSeparator ? styles.separator : {};
  }, [showSeparator]);

  return (
    <View style={[styles.container, separatorStyle, style]} {...rest}>
      {children}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  separator: {
    borderTopColor: '#ddd',
    borderTopWidth: 0.5,
  },
});
