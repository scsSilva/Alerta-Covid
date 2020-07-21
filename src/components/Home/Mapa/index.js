import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {CommonActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import {Context} from '../../../context';

import api from '../../../services/api';

let image = require('../../../../assets/images/logo.png');

import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function Mapa(props) {
  function deleteCaso(id) {
    api.delete(`/delete_caso/${id}`).then(() => {
      console.log('Caso deletado');

      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    });
  }

  const [id, setId] = useState('');

  const altura = Dimensions.get('window').height;

  useEffect(() => {
    async function getId() {
      let idMedico = await AsyncStorage.getItem('@id_user');

      setId(idMedico);
    }

    getId();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.viewMenu}>
            <TouchableOpacity
              style={styles.menuImage}
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <AntDesign name="doubleleft" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Image source={image} style={styles.image} />
        </View>

        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <View style={styles.infoHeaderBody}>
              <Text style={styles.text}>
                {' '}
                <Text style={styles.textBold}>Nome do Paciente: </Text>
                {props.route.params.name}
              </Text>

              <Text style={styles.text}>
                {' '}
                <Text style={styles.textBold}>Data: </Text>{' '}
                {props.route.params.data}
              </Text>

              <Text style={styles.text}>
                {' '}
                <Text style={styles.textBold}>Hora: </Text>
                {props.route.params.hora}
              </Text>
            </View>

            {id == props.route.params.idMedico && (
              <View style={styles.icons}>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    props.navigation.navigate('update', {
                      idCaso: props.route.params.id,
                      idMedico: id,
                      idLocal: props.route.params.idLocal,

                      rua: props.route.params.rua,
                      bairro: props.route.params.bairro,
                      cidade: props.route.params.cidade,
                      latitude: props.route.params.latitude,
                      longitude: props.route.params.longitude,

                      name: props.route.params.name,
                      hora: props.route.params.hora,
                      data: props.route.params.data,
                    });
                  }}>
                  <View style={styles.icon}>
                    <EvilIcons name="pencil" size={30} color="black" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    deleteCaso(props.route.params.id);
                  }}>
                  <View style={styles.icon}>
                    <EvilIcons name="trash" size={30} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.textMap}>
            <View>
              <Text style={styles.text}>
                {' '}
                <Text style={styles.textBold}>Local:</Text>{' '}
                <Text>{props.route.params.rua}</Text>
              </Text>
              <Text style={styles.text}>
                {' '}
                <Text>Bairro: {props.route.params.bairro}</Text>
              </Text>

              <Text style={styles.text}>
                {' '}
                <Text>Cidade: {props.route.params.cidade}</Text>
              </Text>
            </View>
          </View>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: props.route.params.latitude,
              longitude: props.route.params.longitude,
              latitudeDelta: 0.004,
              longitudeDelta: 0.005,
            }}>
            <Marker
              coordinate={{
                latitude: props.route.params.latitude,
                longitude: props.route.params.longitude,
              }}
            />
          </MapView>
        </View>

        <View
          style={[
            styles.footer,
            altura <= 640 ? {paddingBottom: 25} : {paddingBottom: 0},
          ]}>
          <Text style={styles.dev}>@Starts Technology</Text>
        </View>
      </View>
    </ScrollView>
  );
}
