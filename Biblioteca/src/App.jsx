import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import Favoritos from "./pages/favoritosPage/Favoritos";
import { FavoritosStorage } from "./contexts/FavoritosContext";
import { LivrosStorage } from "./contexts/LivrosContext";

function App() {
  return (
    <div>
      <LivrosStorage>
        <FavoritosStorage>
          <Router>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
          </Router>
        </FavoritosStorage>
      </LivrosStorage>
    </div>
  );
}

export default App;
