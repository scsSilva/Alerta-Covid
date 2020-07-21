import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height.height,
    backgroundColor: '#fff',
  },

  scroll: {
    marginTop: 20,
  },

  header: {
    padding: 30,
    width: width,
    alignItems: 'center',
  },

  image: {
    height: 50,
    width: 100,
  },

  menuImage: {
    position: 'absolute',
    left: 20,
    top: 45,
  },

  searchAndFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  search: {
    marginRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    width: '65%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },

  inputSearch: {
    width: '85%',
    height: 40,
    marginLeft: 10,
    color: '#07031a',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },

  filters: {
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  list: {
    width: '80%',
  },

  notFound: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
  },
  viewLoad: {
    margin: 5,
    width: 300,
    height: 5,

    backgroundColor: '#f5f5f5',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 5,
    paddingBottom: 5,
  },
  txtQtde: {
    color: '#1BC079',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default styles;
