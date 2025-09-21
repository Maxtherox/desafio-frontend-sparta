import { motion } from "framer-motion";
import { HeaderContainer, Title } from "./styles";
import { useLocation } from "react-router-dom";

export default function Header({ isOpen }) {
  const location = useLocation();

  const pageTitles = {
    "/": "Home",
    "/dados": "Dados",
    "/graficos": "Gráficos",
    "/filtros": "Filtros",
    "/metodologia": "Metodologia",
    "/indicadores": "Indicadores",
    "/contato": "Contato",
    "/busca": "Busca",
    "/usuarios": "Usuários",
    "/config": "Configurações",
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <HeaderContainer
      isOpen={isOpen}
      as={motion.header}
      animate={{ paddingLeft: isOpen ? 20 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <Title>{currentTitle}</Title>
    </HeaderContainer>
  );
}
