import React, {useMemo} from 'react';
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
  contentContainerStyle?: StyleProp<ViewStyle>;
  center?: boolean;
};

const Body = ({
  children,
  style,
  contentContainerStyle,
  center,
  ...rest
}: BodyProps & ScrollViewProps): JSX.Element => {
  const centerStyle: StyleProp<ViewStyle> = useMemo(() => {
    if (center) {
      return {flexGrow: 1, justifyContent: 'center'};
    }
    return {};
  }, [center]);
  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={[centerStyle, contentContainerStyle]}
      {...rest}>
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
