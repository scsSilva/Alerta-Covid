import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import styles from './style';
import PainelQuestion from './PainelQuestion/index';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Questions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dúvidas Frequentes</Text>
      <View>
        <TextInput style={styles.input} placeholder="Pesquisar" />

        <MaterialIcons
          name="search"
          color="black"
          size={20}
          style={styles.search}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />

        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />

        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />

        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />

        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />

        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />

        <PainelQuestion
          titleQuestion={'São dados Oficiais?'}
          text={
            'Sim, os dados são cadastrados pelos médicos responsáveis pelo caso informado, e os mesmos são confirmados pelos orgãos oficiais do governo'
          }
        />
      </ScrollView>
    </View>
  );
}
