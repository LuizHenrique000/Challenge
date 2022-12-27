import React, { useContext, useState } from "react";

export const LivrosContext = React.createContext();

export const LivrosStorage = ({ children }) => {
  const [livros, setLivros] = useState([]);
  return (
    <LivrosContext.Provider value={{ livros, setLivros }}>
      {children}
    </LivrosContext.Provider>
  );
};

export function useLivrosContext() {
  const useLivrosFavoritos = useContext(LivrosContext);
  return useLivrosFavoritos;
}
