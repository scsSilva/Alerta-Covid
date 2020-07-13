import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#117449',
    fontFamily: 'Saira-Bold'


  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    marginTop: 20,
    padding: 10
  },
  search: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 29,
    right: 10
  }
})

export default styles;