import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livros from "./pages/Livros";
import Favoritos from "./pages/Favoritos";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Livros />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}
