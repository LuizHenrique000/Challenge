import { AppRoutes } from "./Routes";
import Home from "./pages/home-page/home";
import Favoritos from "./pages/favoritos-page/Favoritos";
import { FavoritosStorage } from "./contexts/FavoritosContext";
import { LivrosStorage } from "./contexts/LivrosContext";

function App() {
  return (
    <div>
      <LivrosStorage>
        <FavoritosStorage>
          <AppRoutes>
            <Home />
            <Favoritos />
          </AppRoutes>
        </FavoritosStorage>
      </LivrosStorage>
    </div>
  );
}

export default App;
