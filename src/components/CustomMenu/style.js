import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "100%",
  },

  image: {
    width: 150,
    height: 70,
  },

  search: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#F2EEEE",
    width: 210,
    height: 45,
    borderRadius: 10,
  },

  inputSearch: {
    width: 140,
    height: 40,
    fontSize: 15,
  },

  listMenu: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 10,
  },

  buttonMenu: {
    marginBottom: 20,
  },

  labelButton: {
    fontSize: 14,
    fontFamily: 'Saira-Regular',

    borderColor: "#ddd",
    borderBottomWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
  },
  viewButton: {
    flexDirection: "row",
  },

  viewBottom: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonExit: {
    backgroundColor: "#1BC079",
    width: 110,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  labelExit: {
    color: "#fff",
    fontSize: 17,
    fontFamily: 'Saira-Bold',
  },
  labelLog: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    marginLeft: 10,
    marginBottom: 20,
  },

  labelHelp: {
    textDecorationLine: "underline",
    color: "gray",
    fontFamily: 'Saira-Medium',
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  labelFooter: {
    fontSize: 15,
    fontFamily: 'Saira-Bold',
  },
  dev: {
    fontSize: 15,
    fontFamily: 'Saira-Bold',
    color: "#10ac84",
  },
});