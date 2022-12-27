import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <a className="logo">Library</a>
        <ul className="nav-list">
          <li>
            <Link className="favoritos" to="/favoritos">
              Favoritos
            </Link>
          </li>
          <li>
            <Link className="livros" to="/">
              Livros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
