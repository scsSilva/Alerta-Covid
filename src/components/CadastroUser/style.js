import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    height: height
  },
  header: {
    alignItems: 'center',
  },

  content: {
    marginTop: 45,
    height: height * (50 / 100),
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: height * (10 / 100),
  },

  image: {
    width: 150,
    height: 90,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginTop: 10
  },
  viewForm: {
    width: 310,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  icon: {
    marginLeft: 10
  },
  input: {
    width: 270,
    height: 50,
    marginLeft: 20,
    fontFamily: 'Roboto-Regular',
    color: '#34495e'
  },
  viewRemember: {
    marginBottom: 15,
  },

  title: {
    alignSelf: "center",
    fontSize: 30,
    justifyContent: "center",
    marginTop: 20,
    color: "#117449",
    fontWeight: "bold",
    marginBottom: 10
  },
  buttonLogin: {
    width: 310,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1dd1a1',
    borderRadius: 5,
  },
  labelButton: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  labelButtonRemember: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#10ac84',
    alignSelf: 'flex-end',
  },
  dev: {
    fontSize: 15,
    fontFamily: 'Saira-Bold',
    color: '#10ac84',
  },

  erro: {
    margin: 20,
    textAlign: "center",
    color: "#B31A00",
  },

  icon: {
    marginLeft: 10
  },

});

export default styles;