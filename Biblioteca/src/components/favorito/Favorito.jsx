import { useFavoritosContext } from "../../contexts/FavoritosContext";
import { VscChromeClose } from "react-icons/vsc";
import "../favorito/favorito.css";

export default function favorito() {
  const { favoritos, setFavoritos } = useFavoritosContext();

  const removerFavorito = (id) => {
    const favoritosAtualizados = favoritos.filter(
      (favorito) => favorito.id !== id
    );
    setFavoritos(favoritosAtualizados);
    alert("Livro Desfavoritado Com Sucesso!");
  };

  return (
    <div>
      <div className="book-container">
        {favoritos.map((livro, index) => (
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
              <p className="data">{livro.published}</p>
              <p className="descricao">{livro.description}</p>
              <button
                className="desfavoritar"
                onClick={() => {
                  removerFavorito(livro.id);
                }}
              >
                <VscChromeClose className="icon" />
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
