import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Image,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  Button,
} from 'react-native';

import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PainelCasos from './PainelCasos/index';

let image = require('../../../assets/images/logo.png');

import styles from './styles';

import api from '../../services/api';

import {Context} from '../../context';

export default function Home({navigation}) {
  const [casos, setCasos] = useState([]);
  const [casosFixos, setCasosFixos] = useState([]);
  const [search, setSearch] = useState('');

  const [visible, setVisible] = useState(false);
  const [largura, setLargura] = useState(new Animated.Value(0));

  const [text, setText] = useState(new Animated.Value(0));
  const [txt, setTxt] = useState('');

  useEffect(() => {
    async function getCasos() {
      const response = await api.get('/casos');

      setCasos(response.data);
    }

    getCasos();
  }, []);

  Animated.timing(largura, {
    toValue: 300,
    duration: 400,
  }).start();

  function filtrarCasos() {
    let resultado = search.split(/\s*,\s*/);
    let estado = resultado[0].toUpperCase();
    let cidade = resultado[1].toUpperCase();

    let casosFiltrados = casosFixos.filter((casos) => {
      if (
        casos.locais.Estado.toUpperCase() === estado &&
        casos.locais.Cidade.toUpperCase() === cidade
      ) {
        return true;
      } else {
        return false;
      }
    });

    setCasos(casosFiltrados);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuImage}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <AntDesign name="menu-unfold" size={25} color="#B31A00" />
        </TouchableOpacity>
        <Image source={image} style={styles.image} />
      </View>

      {casos.length === 0 && (
        <>
          <Text style={styles.notFound}>Carregando</Text>
          <View style={styles.viewLoad}>
            <Animated.View
              style={{
                width: largura.toValue,
                height: 5,
                backgroundColor: '#1dd1a1',
                borderRadius: 20,
              }}></Animated.View>
          </View>
        </>
      )}

      {casos.length > 0 && (
        <>
          <View style={styles.searchAndFilter}>
            <View style={styles.search}>
              <TextInput
                placeholder="Ex: AL, Maceió"
                placeholderTextColor="#393e46"
                value={search}
                onChangeText={(text) => setSearch(text)}
                style={styles.inputSearch}
              />
            </View>
            <TouchableOpacity
              style={styles.filters}
              onPress={() => {
                filtrarCasos();
              }}>
              <Ionicons name="ios-search" size={24} color="#393e46" />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            data={casos}
            keyExtractor={(casos, index) => {
              return index.toString();
            }}
            renderItem={({item}) => (
              <PainelCasos
                idCaso={item.id}
                idMedico={item.medico_id}
                name={item.nome_paciente}
                hora={item.hora_ocorrido}
                dataCaso={item.data_ocorrido}
                idLocal={item.local.id}
                rua={item.local.rua}
                bairro={item.local.bairro}
                cidade={item.local.cidade}
                estado={item.local.uf}
                nav={navigation}
                lat={item.local.latitude}
                long={item.local.longitude}
              />
            )}
          />
        </>
      )}
    </View>
  );
}
