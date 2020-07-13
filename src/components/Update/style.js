import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('window').height;


export const styles = StyleSheet.create({
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
    marginTop: 35,
    marginBottom: 10,
    height: height * (60 / 100),
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'green'
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

  viewForm2: {
    width: 310,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
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

  picker: {
    width: 240,
    height: 50,
    marginLeft: 20,
    fontFamily: 'Roboto-Regular',
    color: '#34495e'
  },

  contButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: 'gray',
  },

  button: {
    backgroundColor: "#1BC079",
    padding: 10,
    width: 100,
    height: 35,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  textButton: {
    color: '#fff',
    fontSize: 15
  },

  erro: {
    margin: 20,
    textAlign: "center",
    color: "#B31A00",
  },

  dev: {
    fontSize: 15,
    fontFamily: 'Saira-Bold',
    color: '#10ac84',
  },

  destaque: {
    width: 65,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingRight: 5
  }
})