import { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";
import Header from "../../components/header/header";
import { useFavoritosContext } from "../../contexts/FavoritosContext";

export default function Home() {
  const [livros, setLivros] = useState([]);
  const { setFavoritos } = useFavoritosContext();

  const buscarLivros = async () => {
    const resultado = await axios.get(
      "https://fakerapi.it/api/v1/books?_quantity=20"
    );
    setLivros(resultado.data.data);
  };

  useEffect(() => {
    buscarLivros();
  }, []);

  const favoritarLivro = (id) => {
    livros.map((livro) => {
      if (livro.id == id) {
        setFavoritos((livrosAnteriores) => [...livrosAnteriores, livro]);
        alert("Livro Favoritado Com Sucesso!");
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="book-container">
        {livros.map((livro, index) => (
          <li key={livro.id}>
            <div className="book">
              <img
                className="image"
                await="true"
                src={`${livro.image}/${index}`}
                height="200px"
                width="170px"
              />
              <p className="titulo">
                <strong>{livro.title}</strong>
              </p>
              <p className="autor">{livro.author}</p>
              <p className="genero">{livro.genre}</p>
              <p className="descricao">{livro.description}</p>
              <button
                className="favorito"
                onClick={() => {
                  favoritarLivro(livro.id);
                }}
              >
                Favoritar
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
