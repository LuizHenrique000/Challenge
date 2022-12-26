import Header from "../../components/header/header";
import { useFavoritosContext } from "../../contexts/FavoritosContext";

export default function Favoritos() {
  const { favoritos } = useFavoritosContext();

  return (
    <div>
      <Header />
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
