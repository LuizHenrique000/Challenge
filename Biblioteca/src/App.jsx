import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";
import Favoritos from "./pages/favoritospage/favoritos";
import { FavoritosStorage } from "./contexts/favoritoscontext";
import { LivrosStorage } from "./contexts/livroscontext";

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
