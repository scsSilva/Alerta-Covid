import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './style';

import api from '../../services/api';

import {useNavigation, CommonActions} from '@react-navigation/native';

import {Context} from '../../context';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function CadUser(props) {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [crm, setCrm] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');

  const [erroDados, setErroDados] = useState('');

  function rotaLogin() {
    setNome('');
    setCrm('');
    setCargo('');
    setSenha('');
    setErroDados('');

    props.navigation.navigate('Login');
  }

  async function saveDoctor(token, id, crm, name) {
    await AsyncStorage.multiSet([
      ['@token_user', token],
      ['@id_user', id.toString()],
      ['@crm', crm],
      ['@name', name],
    ]);
  }

  async function cadastrar(nome, crm, cargo, senha) {
    try {
      if (
        nome.length > 0 &&
        crm.length > 0 &&
        cargo.length > 0 &&
        senha.length > 0
      ) {
        const response = await api.post('/create_medico', {
          crm,
          senha,
          cargo,
          nomeCompleto: nome,
        });

        props.navigation.navigate('Login');

        setNome('');
        setCrm('');
        setCargo('');
        setSenha('');

        return true;
      } else {
        setErroDados('Faltando dados para o cadastro!');
        setTimeout(() => {
          setErroDados('');
        }, 1500);
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  const altura = Dimensions.get('window').height;

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
          <View style={[styles.viewForm, {marginBottom: 15}]}>
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
              placeholder="Senha"
              placeholderTextColor="#7f8c8d"
              secureTextEntry={true}
              style={styles.input}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </View>

          <View style={styles.viewForm}>
            <View style={styles.icon}>
              <SimpleLineIcons name="emotsmile" size={20} color="#3BFFAA" />
            </View>
            <TextInput
              placeholder="Nome Completo"
              placeholderTextColor="#7f8c8d"
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
          </View>

          <View style={[styles.viewForm, {marginBottom: 15}]}>
            <View style={styles.icon}>
              <SimpleLineIcons name="layers" size={20} color="#3BFFAA" />
            </View>
            <TextInput
              placeholder="Cargo ou Ocupação"
              placeholderTextColor="#7f8c8d"
              style={styles.input}
              value={cargo}
              onChangeText={(text) => setCargo(text)}
            />
          </View>

          <View style={styles.viewRemember}>
            <TouchableOpacity onPress={() => rotaLogin()}>
              <Text style={styles.labelButtonRemember}>
                Já tenho uma Conta!
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              cadastrar(nome, crm, cargo, senha);
            }}
            style={styles.buttonLogin}>
            <Text style={styles.labelButton}>Criar conta</Text>
          </TouchableOpacity>

          <Text style={styles.erro}>{erroDados}</Text>
        </View>

        <View
          style={[
            styles.footer,
            altura <= 640 ? {paddingBottom: 25} : {paddingBottom: 0},
          ]}>
          <Text style={styles.dev}>@Starts Technology</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
