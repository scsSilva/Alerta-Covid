import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {CommonActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import opencage from 'opencage-api-client';

import axios from 'axios';

import {styles} from './style';

import api from '../../services/api';

export default function CadCaso(props) {
  const [id, setId] = useState('');

  const [token, setToken] = useState('');

  const [nome, setNome] = useState('');
  const [uf, setUF] = useState('AL');
  const [cidade, setCidade] = useState('Maceió');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');

  const [hora, setHora] = useState('');
  const [data, setData] = useState('');

  const [ufs, setUfs] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [error, setErro] = useState('');

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    hideTimePicker();
    setHora(time.toString().slice(16, 21));
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    hideDatePicker();
    let dia = date.getDate().toString().padStart(2, '0');
    let mes = (date.getMonth() + 1).toString().padStart(2, '0');
    let ano = date.getFullYear();
    setData(`${dia}/${mes}/${ano}`);
  };

  useEffect(() => {
    async function getInfoDoctor() {
      let id = await AsyncStorage.getItem('@id_user');
      let token = await AsyncStorage.getItem('@token_user');

      let id_user = parseInt(id);

      setId(id_user);
      setToken(token);
    }

    getInfoDoctor();
  });

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        const ufsInitial = response.data.map((uf) => uf.sigla);
        setUfs(ufsInitial.sort());
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
      )
      .then((response) => {
        const cityInitial = response.data.map((city) => city.nome);
        setCidades(cityInitial.sort());
      });
  }, [uf]);

  function getLocation() {
    return new Promise((resolve) => {
      opencage
        .geocode({
          q: `${rua}, ${bairro}, ${cidade}`,
          key: 'da9d4b50affb45a88c80ab0b87efb969',
        })
        .then((data) => {
          if (data.status.code == 200) {
            if (data.results.length > 0) {
              let place = data.results[0];

              let latitude1 = place.geometry.lat;
              let longitude1 = place.geometry.lng;

              resolve([latitude1, longitude1]);
            }
          }
        });
    });
  }

  async function cadastro1() {
    setErro('Aguarde');
    setTimeout(() => {
      setErro('');
    }, 1000);

    let position = await getLocation();

    let latitude1 = position[0];
    let longitude1 = position[1];

    cadastrar(
      id,
      nome,
      uf,
      cidade,
      bairro,
      rua,
      hora,
      data,
      latitude1,
      longitude1,
    );
  }

  async function cadastrar(
    id,
    nome,
    uf,
    cidade,
    bairro,
    rua,
    hora,
    data,
    latitude,
    longitude,
  ) {
    try {
      if (
        id != '' &&
        nome.length > 0 &&
        uf.length > 0 &&
        cidade.length > 0 &&
        bairro.length > 0 &&
        rua.length > 0 &&
        hora != '' &&
        data != '' &&
        latitude != '' &&
        longitude != ''
      ) {
        const config = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };

        await api.post(
          '/create_caso',
          {
            id,
            nome_paciente: nome,
            data_ocorrido: data,
            hora_ocorrido: hora,
            rua,
            bairro,
            cidade,
            uf,
            latitude,
            longitude,
          },
          config,
        );

        setNome('');
        setBairro('');
        setRua('');

        setId('');

        setHora('');
        setData('');

        setLatitude('');
        setLongitude('');

        setErro('');

        props.navigation.navigate('Home');
        return true;
      } else {
        setErro('Faltando dados para o cadastro!');
        setTimeout(() => {
          setErro('');
        }, 3000);
        return false;
      }
    } catch (erro) {
      return false;
    }
  }

  function retornar() {
    setUF('');
    setCidade('');
    setBairro('');
    setRua('');
    setLatitude('');
    setLongitude('');
    setNome('');
    setUF('AL');
    setCidade('Maceió');
    setErro('');

    props.navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={-500}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View style={styles.content}>
          <View style={styles.header}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.image}
            />
            <Text style={styles.titleHeader}>Cadastrar Novo Caso</Text>
          </View>

          <View style={styles.infoCaso}>
            <Text style={styles.titleSection}>Dados do Caso</Text>
            <View>
              <Text style={styles.labelInput}>Nome</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={nome}
                onChangeText={(text) => setNome(text)}
                placeholder="Nome do paciente"
                style={styles.input}
              />
            </View>
            <View>
              <Text style={styles.labelInput}>Estado</Text>
              <View style={styles.picker}>
                <Picker
                  mode="dialog"
                  selectedValue={uf}
                  onValueChange={(itemValue) => setUF(itemValue)}>
                  {ufs.map((uf) => (
                    <Picker.Item key={uf} label={uf} value={uf} />
                  ))}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.labelInput}>Cidade</Text>
              <View style={styles.picker}>
                <Picker
                  mode="dialog"
                  selectedValue={cidade}
                  onValueChange={(itemValue) => setCidade(itemValue)}>
                  {cidades.map((cidade) => (
                    <Picker.Item key={cidade} label={cidade} value={cidade} />
                  ))}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.labelInput}>Bairro</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={bairro}
                onChangeText={(text) => setBairro(text)}
                placeholder="Bairro"
                style={styles.input}
              />
            </View>
            <View>
              <Text style={styles.labelInput}>Rua / Avenida / Travessa</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={rua}
                onChangeText={(text) => setRua(text)}
                placeholder="Local (opcional: número)"
                style={styles.input}
              />
            </View>
            <View style={styles.dateAndHour}>
              <TouchableOpacity style={styles.btnTime} onPress={showTimePicker}>
                <AntDesign name="clockcircleo" size={24} color="#07031a" />
                <Text style={styles.labelBtnTime}>
                  {hora != '' ? hora : 'Definir hora'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                is24Hour
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />

              <TouchableOpacity style={styles.btnTime} onPress={showDatePicker}>
                <AntDesign name="calendar" size={24} color="#07031a" />
                <Text style={styles.labelBtnTime}>
                  {data != '' ? data : 'Definir data'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
            </View>
          </View>

          <Text style={styles.erro}>{error}</Text>

          <TouchableOpacity style={styles.button} onPress={() => cadastro1()}>
            <Text style={styles.labelButton}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#e74c3c'}]}
            onPress={() => {
              retornar();
            }}>
            <Text style={styles.textButton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
