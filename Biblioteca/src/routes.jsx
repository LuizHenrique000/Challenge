import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page/home";
import Favoritos from "./pages/favoritos-page/favoritos";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}
