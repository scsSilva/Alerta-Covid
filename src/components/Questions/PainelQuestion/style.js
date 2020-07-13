import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 300,
    height: 120,
    borderRadius: 8,
    margin: 15,
    elevation: 2,
    padding: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#117449',
    fontFamily: 'Saira-Medium',
  },
  text: {
    padding: 3,
    textAlign: 'justify',
    color: '#117449',
    fontFamily: 'Saira-Regular',
    lineHeight: 18,
  },
});

export default styles;
