import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },

  header: {
    height: Dimensions.get('window').height * (20 / 100),
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 90,
    marginTop: 20
  },

  content: {
    height: Dimensions.get('window').height * (40 / 100),
    marginTop: Dimensions.get('window').height * (10 / 100),
    justifyContent: 'center',
  },

  txtPresidente: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5
  },

  txtCargo: {
    textAlign: 'center',
    marginBottom: '10%'
  },

  txtDestinatario: {
    fontSize: 15
  },

  buttons: {
    flexDirection: 'row',
    marginTop: '5%'
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10ac84',
    width: 120,
    height: 45,
    borderRadius: 10,
  },

  labelButton: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginLeft: 7,
    color: '#f7f7f7',
    fontWeight: 'bold'
  },

  footer: {
    height: Dimensions.get('window').height * (20 / 100),
    marginTop: Dimensions.get('window').height * (10 / 100),
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },

  dev: {
    fontSize: 15,
    fontFamily: 'Saira-Bold',
    color: '#10ac84',
  },
})