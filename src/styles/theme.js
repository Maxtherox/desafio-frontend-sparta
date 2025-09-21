export const theme = {
  colors: {
    primary: "#3f4d67",      // Azul principal (títulos, botões, bordas)
    secondary: "#1A2B49",    // Azul escuro (sidebar)
    background: "#FFFFFF",   // Fundo geral
    text: "#333333",         // Texto padrão
    link: "#2E4A91",         // Links
    sidebarIcon: "#FFFFFF",  // Ícones do menu lateral
    border: "#E0E0E0",       // Bordas suaves
    white: "#FFFFFF",       // Branco puro
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSizeBase: "16px",
    headingWeight: "700",
    textWeight: "400",
  },
  spacing: (factor) => `${factor * 8}px`, // Ex: spacing(2) = "16px"
  borderRadius: "8px",
};
