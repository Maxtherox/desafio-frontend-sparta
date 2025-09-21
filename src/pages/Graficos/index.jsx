import { useEffect, useState } from "react";
import { getIPCAData, processIPCAData } from "../../services/ibge";
import CustomLineChart from "../../components/LineChart";
import { ChartsContainer } from "./styles";
import { useLoading } from "../../context/LoadingContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Graficos() {
  const [chartData, setChartData] = useState([]);
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    async function fetchData() {
      try {
        showLoader();
        const rawData = await getIPCAData();
        const processedData = processIPCAData(rawData);

        const allData = processedData
          .map((group) => {
            const monthlyVariationData = group.data
              .filter((d) => d.variable === "IPCA - Variação mensal")
                          .map((d) => ({
                            month: d.month,
                            monthCode: d.monthCode,
                            value: d.value,
                          }))
                          .sort((a, b) => a.monthCode.localeCompare(b.monthCode));
            return {
              groupName: group.groupName,
              data: monthlyVariationData,
            };
          })
          .filter((group) => group.data.length > 0);

        setChartData(allData);
      } catch (error) {
        console.error("Erro ao buscar dados para os gráficos:", error);
      } finally {
        hideLoader();
      }
    }

    fetchData();
  }, [showLoader, hideLoader]);

  return (
    <ChartsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {chartData.map((chart) => (
        <CustomLineChart
          key={chart.groupName}
          title={`Variação Mensal - ${chart.groupName}`}
          data={chart.data}
          xAxisKey="month"
          dataKey="value"
        />
      ))}
    </ChartsContainer>
  );
}
