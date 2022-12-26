import { AppRoutes } from "./Routes";
import Home from "./pages/home/home";
import Favoritos from "./pages/favoritos/Favoritos";
import { FavoritosStorage } from "./contexts/FavoritosContext";

function App() {
  return (
    <div>
      <FavoritosStorage>
        <AppRoutes>
          <Home />
          <Favoritos />
        </AppRoutes>
      </FavoritosStorage>
    </div>
  );
}

export default App;
