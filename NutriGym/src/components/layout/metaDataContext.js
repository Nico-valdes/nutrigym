import { createContext, useState, useContext, useEffect } from 'react';

const MetaDataContext = createContext();

export const MetaDataProvider = ({ children }) => {
  const [title, setTitle] = useState("Inicio - NutriGym");
  const [name, setName] = useState("description");
  const [content, setContent] = useState("Bienvenido a NutriGym.");

  useEffect(() => {
    document.title = `${title}`;
    const metaDescription = document.querySelector(`meta[name=${name}]`);
    if (metaDescription) {
      metaDescription.setAttribute("content", `${content}`);
    }
  }, [title, name, content]);

  return (
    <MetaDataContext.Provider value={{ title, setTitle, name, setName, content, setContent }}>
      {children}
    </MetaDataContext.Provider>
  );
};

export const useMetaDataContext = () => useContext(MetaDataContext);