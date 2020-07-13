import React, {createContext, useState, useEffect} from 'react';

export const Context = createContext();

export const ContextProvider = ({children}) => {
  const [signed, setSignIn] = useState(false);
  const [visited, setVisited] = useState(false);
  const [doctor, setDoctor] = useState(null);

  return (
    <Context.Provider
      value={{
        signed,
        setSignIn,
        visited,
        setVisited,
        doctor,
        setDoctor,
      }}>
      {children}
    </Context.Provider>
  );
};
