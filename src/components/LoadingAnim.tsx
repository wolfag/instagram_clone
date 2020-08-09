import React from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export interface LoadingAminProps {
  loading: boolean;
  color?: string;
  size?: number;
}

const LoadingAmin = ({
  loading,
  color = '#000',
  size = 30,
}: LoadingAminProps) => {
  const _loadingAnimValue = new Animated.Value(0);
  const _animationLoading = () => {
    Animated.timing(_loadingAnimValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
    }).start(() => {
      _loadingAnimValue.setValue(0);
      loading && _animationLoading();
    });
  };

  if (!loading) {
    return null;
  }

  return (
    <Animated.View
      onLayout={_animationLoading}
      style={[
        styles.animateLoading,
        {
          width: size,
          height: size,
          transform: [
            {
              rotate: _loadingAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}>
      <Feather name="loader" size={size} color={color} />
    </Animated.View>
  );
};

export default LoadingAmin;

const styles = StyleSheet.create({
  animateLoading: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
