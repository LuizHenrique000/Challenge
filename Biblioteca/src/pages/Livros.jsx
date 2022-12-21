import { useState, useEffect } from "react";
import axios from "axios";
import "../pages/style.css";

export default function Livros() {
  const [livros, setLivros] = useState({});
  useEffect(() => {
    axios.get("https://fakerapi.it/api/v1/books?_quantity=1").then((res) => {
      setLivros(res.data.data);
    });
  }, []);

  // const [titulo, setTitulo] = useState("");
  // const [autor, setAutor] = useState("");
  // const [genero, setGenero] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [imagem, setImagem] = useState("");

  // const handleSearchBook = () => {
  //   axios.get("https://fakerapi.it/api/v1/books?_quantity=").then((res) => {
  //     setTitulo(res.data.data[0].title);
  //     setAutor(res.data.data[0].author);
  //     setGenero(res.data.data[0].genre);
  //     setDescricao(res.data.data[0].description);
  //     setImagem(res.data.data[0].image);
  //   });
  // };

  return (
    <div className="book-container">
      <div className="book">
        {livros.map((livro) => {
          <>
            <img
              className="image"
              src={livro.image}
              height="200px"
              width="170px"
            />
            <p className="titulo">
              <strong>{livro.title}</strong>
            </p>
            <p className="autor">{livro.author}</p>
            <p className="genero">{livro.genre}</p>
            <p className="descricao">{livro.description}</p>
            <button className="favorito">Favoritar</button>
          </>;
        })}
      </div>
    </div>
  );
}
