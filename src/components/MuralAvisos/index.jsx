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
    { id: 1, text: "Novos dados do IPCA disponíveis para consulta." },
    { id: 2, text: "Manutenção programada para o dia 30/09 às 22h." },
    { id: 3, text: "Atualização na visualização de gráficos de barras." },
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
