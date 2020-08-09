import React, {useMemo} from 'react';
import {StyleSheet, StyleProp, ViewStyle, View, ViewProps} from 'react-native';

type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  showSeparator?: boolean;
};

const Header = ({
  children,
  style,
  showSeparator,
  ...rest
}: HeaderProps & ViewProps): JSX.Element => {
  const separatorStyle = useMemo(() => {
    return showSeparator ? styles.separator : {};
  }, [showSeparator]);

  return (
    <View style={[styles.container, separatorStyle, style]} {...rest}>
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 20,
  },
  separator: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
});
