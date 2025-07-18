import { useEffect } from "react";
import { useFavoritosContext } from "../../contexts/FavoritosContext";
import { useLivrosContext } from "../../contexts/LivrosContext";
import { getLivros } from "../../services/getLivros";
import { BsStar } from "react-icons/bs";
import "./livro.css";

export default function Livro() {
  const { livros, setLivros } = useLivrosContext();
  const { setFavoritos } = useFavoritosContext();

  useEffect(() => {
    getLivros().then((res) => {
      setLivros(res.data.data);
    });
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
    <div className="book-container">
      {livros.map((livro, index) => (
        <li key={livro.id}>
          <div className="book">
            <img
              className="image"
              await="true"
              src="https://img.icons8.com/ios/452/book.png"
              height="200px"
              width="170px"
            />
            <p className="titulo">{livro.title}</p>
            <p className="autor">{livro.author}</p>
            <p className="genero">{livro.genre}</p>
            <p className="data">{livro.published}</p>
            <p className="descricao">{livro.description}</p>
            <button
              className="favorito"
              onClick={() => {
                favoritarLivro(livro.id);
              }}
            >
              <BsStar />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
