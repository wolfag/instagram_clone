import React from 'react';
import {StyleSheet, Text, View, StyleProp, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../../components/MyButton';
import {SCREEN_WIDTH} from '../../../constants';

type LoginWithFacebookProps = {
  style?: StyleProp<ViewStyle>;
};

const LoginWithFacebook = ({style}: LoginWithFacebookProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.divideLine}>
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
  divideLine: {
    marginVertical: 10,
    position: 'relative',
    height: 2,
    width: '100%',
    backgroundColor: '#ddd',
  },
  orTextWrapper: {
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: (2 - 20) / 2,
    left: (SCREEN_WIDTH * 0.9 - 40) / 2,
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  orText: {color: '#333', fontWeight: '600'},
  btnLoginWithFacebook: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginFacebookText: {color: '#318bfb', fontWeight: 'bold'},
});
