import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function painelQuestion(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.titleQuestion}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
