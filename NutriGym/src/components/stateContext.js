import { createContext, useState, useContext, useEffect } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [sharedOpcion, setSharedOpcion] = useState('Usuarios');

  return (
    <StateContext.Provider value={{ sharedOpcion, setSharedOpcion }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);