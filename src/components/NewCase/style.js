import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    alignSelf: 'center',
  },

  header: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },

  titleHeader: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'SourceSansPro-Bold'
  },

  image: {
    width: 120,
    height: 60
  },

  infoCaso: {
    alignSelf: 'center',
  },

  titleSection: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: 10
  },

  labelInput: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular'
  },

  input: {
    borderWidth: 1,
    borderColor: "#323232",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 280,
    height: 40,
    marginBottom: 15,
    color: "#2c3e50",
    fontSize: 14,
    fontFamily: 'OpenSans-Light'
  },

  picker: {
    borderWidth: 1,
    borderColor: "#323232",
    borderRadius: 5,
    width: 280,
    height: 40,
    marginBottom: 15,
  },

  button: {
    width: 280,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "#1BC079",
    borderRadius: 10,
    marginBottom: 10
  },

  labelButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Saira-Bold'
  },

  dateAndHour: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  btnTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f4f6ff',
    borderRadius: 5,
    height: 35
  },

  labelBtnTime: {
    marginLeft: 15,
    fontFamily: 'BalsamiqSans-Regular'
  },

  erro:{
    textAlign: "center",
    color: "#1BC079",
    marginBottom: 5
  }
})