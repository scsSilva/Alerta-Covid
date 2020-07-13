import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: "#fff",
  },

  header: {
    marginTop: "3%",
    height: height * (14 / 100),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //backgroundColor: 'blue'
  },

  viewMenu: {
    position: "absolute",
    left: 20,
  },

  image: {
    width: 150,
    height: 90,
  },

  body: {
    marginTop: "5%",
    marginBottom: "5%",
    height: height * (60 / 100),
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: 'gray'
  },

  bodyHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: "2%",
  },

  infoHeaderBody: {},

  icons: {
    flexDirection: "row",
  },

  textMap: {
    marginTop: "5%",
    marginBottom: "3%",
    justifyContent: "flex-start",
  },

  map: {
    width: "90%",
    height: "65%",
  },

  footer: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: height * (7 / 100),
  },

  dev: {
    fontSize: 15,
    fontFamily: 'Saira-Bold',
    color: "#10ac84",
  },
});

export default styles;