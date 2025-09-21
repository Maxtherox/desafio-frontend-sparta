import AgregadoDetails from "../../components/AgregadoDetails";
import { DataContainer, FilterContainer, SearchInput } from "./styles";
import { useLoading } from "../../context/LoadingContext";
import { useEffect, useMemo, useState } from "react";
import { getAgregados, getAgregadoMetadados } from "../../services/ibge";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
export default function Dados() {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgregado, setSelectedAgregado] = useState(null);
  const { showLoader, hideLoader } = useLoading();


  const columns = [
    { header: "ID", key: "id" },
    { header: "Nome", key: "nome" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        showLoader();
        const data = await getAgregados();
        const allAgregados = data
          .flatMap((group) => group.agregados || [])
          .sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
        setTableData(allAgregados);
      } catch (error) {
        console.error("Erro ao buscar dados dos agregados:", error);
      } finally {
        hideLoader();
      }
    }

    fetchData();
  }, [showLoader, hideLoader]);

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return tableData;
    }
    return tableData.filter(
      (item) =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, tableData]);

  const handleRowClick = async (row) => {
    try {
      showLoader();
      const metadados = await getAgregadoMetadados(row.id);
      setSelectedAgregado(metadados);
    } catch (error) {
      console.error("Erro ao buscar metadados do agregado:", error);
    } finally {
      hideLoader();
    }
  };

  const handleCloseModal = () => {
    setSelectedAgregado(null);
  };

  return (
    <DataContainer>
      <h2>Tabela de Agregados do IBGE</h2>
      <FilterContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar por ID ou nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FilterContainer>
      <Table
        columns={columns}
        data={filteredData}
        onRowClick={handleRowClick}
      />
      <Modal isOpen={!!selectedAgregado} onClose={handleCloseModal}>
        <AgregadoDetails metadados={selectedAgregado} />
      </Modal>
    </DataContainer>
  );
}
