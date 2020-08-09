import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import LoadingAmin from './LoadingAnim';

export interface LoadingProps {
  loading: boolean;
  label?: string;
  loadingColor?: string;
  labelColor?: string;
}

const Loading = ({loading, label, loadingColor, labelColor}: LoadingProps) => {
  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.loading}>
        <LoadingAmin loading={true} size={30} color={loadingColor} />
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
  label: {
    fontWeight: '500',
    marginLeft: 30,
  },
});
