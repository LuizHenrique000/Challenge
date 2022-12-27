import { useFavoritosContext } from "../../contexts/FavoritosContext";

export default function favorito() {
  const { favoritos } = useFavoritosContext();

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
              <p className="descricao">{livro.description}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
