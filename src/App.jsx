import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import { AppContainer, ContentContainer, MainContent } from "./App.styles";

import Home from "./pages/Home";
import Dados from "./pages/Dados";
import Graficos from "./pages/Graficos";
import Usuarios from "./pages/Usuarios";
import Config from "./pages/Config";
import Filtros from "./pages/Filtros";
import Metodologia from "./pages/Metodologia";
import Indicadores from "./pages/Indicadores";
import Contato from "./pages/Contato";
import Busca from "./pages/Busca";

function AppContent() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useLoading();

  return (
    <AppContainer>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContentContainer>
        <Header isOpen={isOpen} />
        {isLoading && <Spinner />}
        <MainContent isOpen={isOpen}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dados" element={<Dados />} />
            <Route path="/graficos" element={<Graficos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/config" element={<Config />} />
            <Route path="/filtros" element={<Filtros />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/indicadores" element={<Indicadores />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/busca" element={<Busca />} />
          </Routes>
        </MainContent>
      </ContentContainer>
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
}

export default App;
