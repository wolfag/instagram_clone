import React from 'react';
import {
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';

type BodyProps = {
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

const Body = ({
  children,
  style,
  ...rest
}: BodyProps & ScrollViewProps): JSX.Element => {
  return (
    <ScrollView style={[styles.container, style]} {...rest}>
      {children}
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
