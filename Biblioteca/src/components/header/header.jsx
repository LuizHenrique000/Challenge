import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="t">
          <p className="titulo">Online Library</p>
        </div>
      </div>
      <div className="navbar">
        <nav>
          <div>
            <Link className="favoritos" to="/favoritos">
              Favorites
            </Link>
          </div>
          <div>
            <Link className="livros" to="/">
              Books
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
