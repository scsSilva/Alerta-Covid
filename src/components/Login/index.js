import React, {useEffect, useState, useContext} from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import api from '../../services/api';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {styles} from './style';

import {Context} from '../../context';

import {CommonActions, useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
  const altura = Dimensions.get('window').height;
  const largura = Dimensions.get('window').width;

  const [erroDados, setErroDados] = useState('');
  const [crm, setCrm] = useState('');
  const [senha, setSenha] = useState('');

  const [error, setErro] = useState('');

  const navigation = useNavigation();

  const {
    signed,
    setSignIn,
    visited,
    setVisited,
    doctor,
    setDoctor,
    alteraDoctor,
  } = useContext(Context);

  async function saveDoctor(token, id, crm, name) {
    await AsyncStorage.multiSet([
      ['@token_user', token],
      ['@id_user', id.toString()],
      ['@crm', crm],
      ['@name', name],
    ]);
  }

  async function login(crm, senha) {
    try {
      const response = await api.post('/login', {crm, senha});

      const token = response.data.token;
      const id = response.data.doctor[0].id;
      const crm2 = response.data.doctor[0].crm;
      const name = response.data.doctor[0].nomeCompleto;

      await saveDoctor(token, id, crm2, name);

      setSignIn(true);

      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    } catch {
      setErro('Usuário não existe!');
      setTimeout(() => {
        setErro('');
      }, 3000);
    }
  }

  function rotaHomeVisit() {
    setCrm('');
    setSenha('');
    setErroDados('');

    setVisited(true);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  }

  function rotaCadastrar() {
    //Limpar tudo antes de ir para a rota
    setCrm('');
    setSenha('');
    setErroDados('');
    navigation.navigate('CadUser');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={-500}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View
          style={[
            styles.header,
            altura > 684
              ? {marginTop: 20, paddingTop: 20}
              : {marginTop: 0, paddingTop: 0},
          ]}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.image}
          />
          <Text style={styles.headerTitle}>Alerta Covid</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.viewForm}>
            <View style={styles.icon}>
              <SimpleLineIcons name="user" size={20} color="#3BFFAA" />
            </View>
            <TextInput
              placeholder="CRM"
              placeholderTextColor="#7f8c8d"
              style={styles.input}
              value={crm}
              onChangeText={(text) => setCrm(text)}
            />
          </View>
          <View style={[styles.viewForm, {marginBottom: 15}]}>
            <View style={styles.icon}>
              <SimpleLineIcons name="lock" size={20} color="#3BFFAA" />
            </View>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#7f8c8d"
              style={styles.input}
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => login(crm, senha)}>
              <Text style={styles.labelButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonVisitante}
              onPress={() => rotaHomeVisit()}>
              <Text style={styles.labelButton}>Entrar como visitante</Text>
            </TouchableOpacity>

            <Text style={styles.erro}>{error}</Text>
          </View>
        </View>
        <View
          style={[
            styles.footer,
            altura <= 640 ? {paddingBottom: 25} : {paddingBottom: 0},
          ]}>
          <Text style={styles.labelCadastro}>Não possui uma conta?</Text>
          <TouchableOpacity
            onPress={() => {
              rotaCadastrar();
            }}>
            <Text style={styles.labelCadastroButton}>Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
