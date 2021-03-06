import React, {useState} from 'react';
import * as yup from 'yup';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';

const CommentScreen = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Text>Comment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommentScreen;
