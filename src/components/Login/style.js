import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    //flex: 1,
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
    marginBottom: 45,
    //backgroundColor: 'green',
    height: height * (50 / 100),
    justifyContent: 'center'
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    //backgroundColor: 'blue',
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  },

  labelRemember: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },

  labelButtonRemember: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#10ac84',
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

  buttonVisitante: {
    marginTop: 10,
    width: 310,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#576574',
    borderRadius: 5
  },

  labelCadastro: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginRight: 5
  },

  labelCadastroButton: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#10ac84'
  },
});