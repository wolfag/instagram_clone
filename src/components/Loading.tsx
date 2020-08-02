import React from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';

export interface LoadingProps {
  loading: boolean;
  label?: string;
  loadingColor?: string;
  labelColor?: string;
}

const Loading = ({loading, label, loadingColor, labelColor}: LoadingProps) => {
  const _loadingAnimValue = new Animated.Value(0);
  const _animationLoading = () => {
    Animated.timing(_loadingAnimValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 400,
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
    <View style={styles.container}>
      <View style={styles.loading}>
        <Animated.View
          onLayout={_animationLoading}
          style={[
            styles.animateLoading,
            {
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
          <Feather name="loader" size={30} color={loadingColor} />
        </Animated.View>
        <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 99,
  },
  loading: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  animateLoading: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    fontWeight: '500',
    marginLeft: 30,
  },
});
