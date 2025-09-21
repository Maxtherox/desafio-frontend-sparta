import { useState } from "react";
import {
  MuralContainer,
  MuralTitle,
  AvisoList,
  AvisoItem,
  MaisAvisosButton,
} from "./styles";
import Notification from "../Notification";

const MuralAvisos = () => {
  const [notification, setNotification] = useState("");

  const avisos = [
    { id: 1, text: "As páginas Home, Dados e Gráficos estão 100% implementadas." },
    { id: 2, text: "As demais páginas são placeholders, pois o objetivo do desafio foi atingido com a visualização de dados." },
    { id: 3, text: "Novos dados do IPCA disponíveis para consulta." },
    { id: 4, text: "O design da aplicação foi atualizado para uma melhor experiência do usuário." },
    { id: 5, text: "A performance de carregamento dos gráficos foi otimizada." },
  ];

  const handleShowNotification = () => {
    setNotification("Esta funcionalidade é apenas um placeholder.");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <>
      <Notification
        message={notification}
        onClose={() => setNotification("")}
      />
      <MuralContainer>
        <MuralTitle>Mural de Avisos</MuralTitle>
        <AvisoList>
          {avisos.map((aviso) => (
            <AvisoItem key={aviso.id}>{aviso.text}</AvisoItem>
          ))}
        </AvisoList>
        <MaisAvisosButton onClick={handleShowNotification}>
          Mais avisos
        </MaisAvisosButton>
      </MuralContainer>
    </>
  );
};

export default MuralAvisos;
