import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {useNavigation, CommonActions} from '@react-navigation/native';

export default function Verify() {
  const navigation = useNavigation();

  useEffect(() => {
    async function verifyUser() {
      const token = await AsyncStorage.getItem('@token_user');
      const id = await AsyncStorage.getItem('@id_user');

      if (token && id) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Home'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      }
    }

    verifyUser();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}
