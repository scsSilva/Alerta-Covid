import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: "#eeee",
    borderRadius: 8,
    height: 140,
    flexDirection: 'row'
  },

  textBold: {
    fontWeight: "bold",
  },
  map: {
    width: '45%',
    height: '100%'
  },

  content: {
    width: '50%',
    height: '100%',
    marginLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '5%'
  },

  locais: {
    marginBottom: '3.5%'
  },

  dateAndHour: {
    marginTop: '3.5%'
  },

  next: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '5%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  details: {
    marginRight: '5%',
    fontSize: 12
  }
});

export default styles;