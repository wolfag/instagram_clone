import React from 'react';
import {StyleSheet, Text, View, StyleProp, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../../components/MyButton';

const height: number = 30;

type LoginWithFacebookProps = {
  style?: StyleProp<ViewStyle>;
};

const LoginWithFacebook = ({style}: LoginWithFacebookProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.divideContainer}>
        <View style={styles.divideWrapper}>
          <View style={styles.divideLine} />
        </View>
        <View style={styles.orTextWrapper}>
          <Text style={styles.orText}>OR</Text>
        </View>
      </View>
      <MyButton link style={styles.btnLoginWithFacebook}>
        <MaterialCommunityIcons name="facebook" size={20} color="#318bfb" />
        <Text style={styles.loginFacebookText}>Login with Facebook</Text>
      </MyButton>
    </View>
  );
};

export default LoginWithFacebook;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  divideContainer: {
    position: 'relative',
    height,
    width: '100%',
  },
  divideWrapper: {
    height,
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divideLine: {
    backgroundColor: '#ddd',
    height: 2,
    width: '100%',
  },
  orTextWrapper: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  orText: {
    color: '#333',
    fontWeight: '600',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  btnLoginWithFacebook: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginFacebookText: {color: '#318bfb', fontWeight: 'bold'},
});
