import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {CommonActions} from '@react-navigation/native';

import styles from './styles';

export default function PainelCasos(props) {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: 0.004,
          longitudeDelta: 0.005,
        }}
        zoomEnabled={false}
        scrollEnabled={false}
        style={styles.map}>
        <Marker
          coordinate={{
            latitude: props.lat,
            longitude: props.long,
          }}
        />
      </MapView>
      <View style={styles.content}>
        <View style={styles.locais}>
          <Text style={styles.campos}>
            <Text style={styles.textBold}>Estado:</Text> {props.estado}
          </Text>
          <Text style={styles.campos}>
            <Text style={styles.textBold}>Cidade:</Text> {props.cidade}
          </Text>
        </View>
        <View style={styles.dateAndHour}>
          <Text style={styles.campos}>
            <Text style={styles.textBold}>Data:</Text> {props.dataCaso}
          </Text>
          <Text style={styles.campos}>
            <Text style={styles.textBold}>Hora:</Text> {props.hora}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.next}
          onPress={() => {
            props.nav.navigate('Map', {
              rua: props.rua,
              bairro: props.bairro,
              cidade: props.cidade,
              latitude: props.lat,
              longitude: props.long,

              idLocal: props.idLocal,

              id: props.idCaso,
              idMedico: props.idMedico,
              name: props.name,
              hora: props.hora,
              data: props.dataCaso,
            });
          }}>
          <Text style={styles.details}>Detalhes</Text>
          <AntDesign name="rightcircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
