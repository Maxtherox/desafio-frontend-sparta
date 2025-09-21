import MuralAvisos from "../../components/MuralAvisos";
import { HomeContainer, PageTitle } from "./styles";
import { useLoading } from "../../context/LoadingContext";
import { useEffect, useState } from "react";
import { getIPCAData, processIPCAData } from "../../services/ibge";
import Card from "../../components/Card";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [summaryData, setSummaryData] = useState([]);
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    async function fetchData() {
      try {
        showLoader();
        const rawData = await getIPCAData();
        const processedData = processIPCAData(rawData);

        const generalIndexData = processedData.find(
          (group) => group.groupName === "Índice geral"
        );

        if (generalIndexData) {
          const metrics = [
            { variable: "IPCA - Variação mensal", title: "Variação Mensal" },
            { variable: "IPCA - Variação acumulada no ano", title: "Variação no Ano" },
            { variable: "IPCA - Variação acumulada em 12 meses", title: "Variação em 12 Meses" },
            { variable: "IPCA - Peso mensal", title: "Peso Mensal" },
          ];

          const summaryCards = metrics.map(metric => {
            const latestData = generalIndexData.data
              .filter(d => d.variable === metric.variable)
              .sort((a, b) => b.month.localeCompare(a.month))[0];

            return {
              id: metric.variable,
              title: `IPCA - ${metric.title}`,
              description: "Índice Geral",
              content: `${latestData?.value || "N/A"}%`,
              footer: `Ref. ${latestData?.month || "N/A"}`,
            };
          });

          setSummaryData(summaryCards);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do IPCA:", error);
      } finally {
        hideLoader();
      }
    }

    fetchData();
  }, [showLoader, hideLoader]);

  return (
    <>
      <PageTitle>This is SPΛRTΛ!</PageTitle>
      <MuralAvisos />
      <HomeContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {summaryData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            content={card.content}
            footer={card.footer}
          />
        ))}
      </HomeContainer>
    </>
  );
}
