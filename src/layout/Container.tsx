import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  StatusBar,
} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

const Container = ({
  children,
  style,
  ...rest
}: ContainerProps & SafeAreaViewProps): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      <StatusBar backgroundColor="#fff" barStyle="default" />
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
