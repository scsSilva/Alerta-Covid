import React from 'react';
import {StatusBar} from 'react-native';

import Main from './src/index';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Main />
    </>
  );
}
