import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home/index';
import PainelCasos from './components/Home/PainelCasos/index';
import Mapa from './components/Home/Mapa/index';
import CadCaso from './components/NewCase/index';
import Login from './components/Login/index';
import Questions from './components/Questions/index';
import CustomMenu from './components/CustomMenu/index';
import CadUser from './components/CadastroUser';
import Contato from './components/Contato/index';
import update from './components/Update/index';
import Verify from './components/Verify/index';

import {Context} from './context';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function Initial() {
  return (
    <Stack.Navigator initialRouteName={Verify}>
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Painel"
        component={PainelCasos}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Map"
        component={Mapa}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CadCaso"
        component={CadCaso}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="update"
        component={update}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicial"
        drawerType="slide"
        drawerContent={(props) => <CustomMenu {...props} />}>
        <Drawer.Screen name="Inicial" component={Initial} />
        <Drawer.Screen name="questions" component={Questions} />

        <Drawer.Screen name="CadUser" component={CadUser} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
