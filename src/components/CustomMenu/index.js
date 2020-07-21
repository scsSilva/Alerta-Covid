import React, {useEffect, useState, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Context} from '../../context';

import {CommonActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import {styles} from './style';

export default function CustomMenu(props) {
  const {signed, setSignIn, visited, setDoctor} = useContext(Context);

  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [loged, setLoged] = useState(null);

  async function logout() {
    await AsyncStorage.removeItem('@token_user');
    await AsyncStorage.removeItem('@id_user');
    await AsyncStorage.removeItem('@crm');
    await AsyncStorage.removeItem('@name');

    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  }

  useEffect(() => {
    async function getInfoDoctor() {
      let token = await AsyncStorage.getItem('@token_user');
      let id = await AsyncStorage.getItem('@id_user');

      setToken(token);
      setId(id);
    }

    getInfoDoctor();
  }, []);

  function Item(props) {
    return (
      <TouchableOpacity style={styles.buttonMenu} onPress={props.navigation}>
        <View>
          <Text style={styles.labelButton}>{props.routeName}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.listMenu}>
        <Item
          routeName="Home"
          navigation={() => {
            props.navigation.navigate('Home');
          }}
        />

        <Item
          routeName="Dúvidas Frequentes"
          navigation={() => props.navigation.navigate('questions')}
        />
        <Item
          routeName="Contato"
          navigation={() => props.navigation.navigate('Contato')}
        />
      </View>

      {!visited && (
        <View style={{marginLeft: 10}}>
          <Item
            routeName="Cadastrar Novo Caso"
            navigation={() =>
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'CadCaso'}],
                }),
              )
            }
          />
        </View>
      )}
      {visited && (
        <Text style={styles.labelLog}>
          Faça Login/Cadastro, para cadastrar um novo caso
        </Text>
      )}
      <View style={styles.viewBottom}>
        {!visited && (
          <TouchableOpacity onPress={() => logout()} style={styles.buttonExit}>
            <Text style={styles.labelExit}>Sair</Text>
          </TouchableOpacity>
        )}
        {visited && (
          <TouchableOpacity
            style={styles.buttonExit}
            onPress={() =>
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'Login'}],
                }),
              )
            }>
            <Text style={styles.labelExit}>Login</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <Text style={styles.labelHelp}>Preciso de ajuda</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.labelFooter}>
          Desenvolvido por <Text style={styles.dev}>@Starts Technology</Text>
        </Text>
      </View>
    </>
  );
  //}
}
