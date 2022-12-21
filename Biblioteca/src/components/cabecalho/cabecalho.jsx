import "../cabecalho/style.css";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <div className="container">
      <div className="header">
        <p>Livros</p>
      </div>
      <div className="navbar">
        <nav>
          <Link className="favoritos" to="/favoritos">
            FAVORITOS
          </Link>
          <Link className="livros" to="/">
            LIVROS
          </Link>
        </nav>
      </div>
    </div>
  );
}
