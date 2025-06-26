import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AntecedentesPage from "@/pages/antecedentes";
import HerramientasPage from "@/pages/herramientas";
import AudiosPage from "@/pages/audios";
import AcercaDePage from "@/pages/acerca-de";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AntecedentesPage />} path="/antecedentes" />
      <Route element={<HerramientasPage />} path="/herramientas" />
      <Route element={<AudiosPage />} path="/audios" />
      <Route element={<AcercaDePage />} path="/acerca-de" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
