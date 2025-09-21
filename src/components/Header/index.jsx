import { motion } from "framer-motion";
import { HeaderContainer, Title } from "./styles";
import { useLocation } from "react-router-dom";

export default function Header({ isOpen }) {

  const location = useLocation();

  const pageTitles = {
    "/": "Home",
    "/relatorios": "Relatórios",
    "/mural": "Mural",
    "/usuarios": "Usuários",
    "/config": "Configurações",
  };

  // Se não encontrar, mostra "Dashboard"
  const currentTitle = pageTitles[location.pathname] || "Dashboard"
  return (
    <HeaderContainer isOpen={isOpen}
      as={motion.header}
      animate={{ paddingLeft: isOpen ? 20 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <Title>{currentTitle}</Title>
    </HeaderContainer>
  );
}
