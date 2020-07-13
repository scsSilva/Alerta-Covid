import React from 'react';

import Routes from './routes';

import { ContextProvider } from './context';

export default function Main() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}