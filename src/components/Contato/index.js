import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./style";

export default function Contato() {
  function messageWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=558293351194`
    );
  }

  function messageEmail() {
    Linking.openURL('mailto:starscorporate@gmail.com?subject=Vim pelo App');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.txtPresidente}>Suporte técnico</Text>
        <Text style={styles.txtCargo}>Start's Corporation</Text>
        <Text style={styles.txtDestinatario}>Falar pelo:</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={messageWhatsapp}>
            <MaterialCommunityIcons name="whatsapp" size={24} color="#edf4f2" />
            <Text style={styles.labelButton}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { marginLeft: "5%" }]}
            onPress={messageEmail}
          >
            <MaterialCommunityIcons name="email" size={24} color="#edf4f2" />
            <Text style={styles.labelButton}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.dev}>@Starts Technology</Text>
      </View>
    </View>
  );
}