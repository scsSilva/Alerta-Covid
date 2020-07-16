import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker,
  Dimensions,
} from "react-native";

import opencage from "opencage-api-client";

import axios from "axios";

import api from '../../services/api';

import { styles } from "./style";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function update(props) {
  const altura = Dimensions.get("window").height;

  const [nome, setNome] = useState(props.route.params.name);
  const [hora, setHora] = useState(props.route.params.hora);
  const [data, setData] = useState(props.route.params.data);

  const [uf, setUF] = useState("AL");
  const [cidade, setCidade] = useState("Maceió");
  const [bairro, setBairro] = useState(props.route.params.bairro);
  const [rua, setRua] = useState(props.route.params.rua);

  const [ufs, setUfs] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [idCaso, setIdCaso] = useState(props.route.params.idCaso);
  const [idMedico, setIdMedico] = useState(props.route.params.idMedico);
  const [idLocal, setIdLocal] = useState(props.route.params.idLocal);

  const [erroDados, setErroDados] = useState("");

  function retornar() {

    setData("");
    setHora("");

    setIdLocal("");
    setIdMedico("");
    setIdCaso("");

    setUF("");
    setCidade("");
    setBairro("");
    setRua("");

    setLatitude("");
    setLongitude("");
    setNome("");
    setUF("AL");
    setCidade("Maceió");
    setErroDados("");

    props.navigation.navigate("Home");
  }

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const ufsInitial = response.data.map((uf) => uf.sigla);
        setUfs(ufsInitial);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
      )
      .then((response) => {
        const cityInitial = response.data.map((city) => city.nome);
        setCidades(cityInitial);
      });
  }, [uf]);

  async function getLocation() {
    opencage
      .geocode({
        q: `${rua}, ${bairro}, ${cidade}`,
        key: "da9d4b50affb45a88c80ab0b87efb969",
      })
      .then((data) => {
        if (data.status.code == 200) {
          if (data.results.length > 0) {
            let place = data.results[0];
            setLatitude(place.geometry.lat);
            setLongitude(place.geometry.lng);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function updateCaso() {
    getLocation();

    try {
      if (
        uf.length > 0 &&
        cidade.length > 0 &&
        bairro.length > 0 &&
        rua.length > 0 &&
        latitude != "" &&
        longitude != ""
      ) {

        api.put('/update_caso', {

          caso_id: idCaso,
          nome_paciente: nome,
          data_ocorrido: data,
          hora_ocorrido: hora,

          local_id: idLocal,
          rua: rua,
          bairro: bairro,
          cidade: cidade,
          uf: uf,

          latitude: latitude,
          longitude: longitude,

          medico_id: idMedico
        }).then( (response) => {
          console.log(response);
        })


        setData("");
        setHora("");

        setIdLocal("");
        setIdMedico("");
        setIdCaso("");

        setUF("");
        setCidade("");
        setBairro("");
        setRua("");

        setLatitude("");
        setLongitude("");
        setNome("");
        setUF("AL");
        setCidade("Maceió");
        setErroDados("");

        props.navigation.navigate("Home");
      }
      if (nome.length == 0 || bairro.length == 0 || rua.length == 0) {
        setErroDados("Falta dados para o cadastro!!");
        setTimeout(() => {
          setErroDados('');
        }, 1500);
        return false;
      }
    } catch (erro) {
      return erro;
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={-500}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <View
          style={[
            styles.header,
            altura > 684
              ? { marginTop: 20, paddingTop: 20 }
              : { marginTop: 0, paddingTop: 0 },
          ]}
        >
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.image}
          />
          <Text style={styles.headerTitle}>Atualizar Caso</Text>
        </View>

        <View style={styles.content}>
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

          <View style={styles.viewForm2}>
            <View style={styles.destaque}>
              <Text style={styles.icon}>Estado</Text>
            </View>
            <View style={styles.picker}>
              <Picker
                mode="dialog"
                selectedValue={uf}
                onValueChange={(itemValue) => setUF(itemValue)}
              >
                {ufs.map((uf) => (
                  <Picker.Item key={uf} label={uf} value={uf} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.viewForm2}>
            <View style={styles.destaque}>
              <Text style={styles.icon}>Cidade</Text>
            </View>
            <View style={styles.picker}>
              <Picker
                mode="dialog"
                selectedValue={cidade}
                onValueChange={(itemValue) => setCidade(itemValue)}
              >
                {cidades.map((cidade) => (
                  <Picker.Item key={cidade} label={cidade} value={cidade} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.viewForm}>
            <View style={styles.icon}>
              <EvilIcons name="location" size={25} color="#3BFFAA" />
            </View>
            <TextInput
              placeholder="Bairro"
              placeholderTextColor="#7f8c8d"
              style={styles.input}
              autoCorrect={false}
              value={bairro}
              onChangeText={(text) => setBairro(text)}
            />
          </View>

          <View style={styles.viewForm}>
            <View style={styles.icon}>
              <EvilIcons name="location" size={25} color="#3BFFAA" />
            </View>
            <TextInput
              placeholder="Rua / Avenida / Travessa"
              placeholderTextColor="#7f8c8d"
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              autoCorrect={false}
              value={rua}
              onChangeText={(text) => setRua(text)}
            />
          </View>

          <View style={styles.contButtons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#e74c3c', marginRight: 8 }]}
              onPress={() => {
                retornar();
              }}
            >
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { marginLeft: 8 }]}
              onPress={() =>
                updateCaso()
              }
            >
              <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
          </View>

          <Text style={erroDados == "" ? "" : styles.erro}>{erroDados}</Text>
        </View>

        <View
          style={[
            styles.footer,
            altura <= 640 ? { paddingBottom: 20 } : { paddingBottom: 0 },
          ]}
        >
          <Text style={styles.dev}>@Starts Technology</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}