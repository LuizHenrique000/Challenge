import React, { useContext, useState } from "react";

export const FavoritosContext = React.createContext();

export const FavoritosStorage = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export function useFavoritosContext() {
  const useContextFavoritos = useContext(FavoritosContext);
  return useContextFavoritos;
}
