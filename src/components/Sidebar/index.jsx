import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaChartLine, 
  FaUniversity, 
  FaFilter, 
  FaGavel, 
  FaWallet, 
  FaEnvelope, 
  FaSearch 
} from "react-icons/fa";
import { SidebarContainer, ToggleButton, IconList, IconItem } from "./styles";

import logoWhite from "../../assets/logo_white.png";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/dados", label: "Dados", icon: <FaUniversity /> }, // gráfico + prédio
    { path: "/graficos", label: "Gráficos", icon: <FaChartLine /> },
    { path: "/filtros", label: "Filtros", icon: <FaFilter /> },
    { path: "/metodologia", label: "Metodologia", icon: <FaGavel /> },
    { path: "/indicadores", label: "Indicadores", icon: <FaWallet /> },
    { path: "/contato", label: "Contato", icon: <FaEnvelope /> },
    { path: "/busca", label: "Busca", icon: <FaSearch /> },
  ];

  return (
    <SidebarContainer
      as={motion.aside}
      animate={{ width: isOpen ? 200 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <>
            <img
              src={logoWhite}
              alt="Logo"
              style={{ width: "28px", marginRight: "8px" }}
            />
            <span>SPΛRTΛ</span>
          </>
        ) : (
          <img src={logoWhite} alt="Logo" style={{ width: "24px" }} />
        )}
      </ToggleButton>
      <IconList>
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            style={{ textDecoration: "none" }}
          >
            <IconItem isActive={location.pathname === item.path}>
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </IconItem>
          </NavLink>
        ))}
      </IconList>
    </SidebarContainer>
  );
}
