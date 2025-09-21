import axios from "axios";

const IPCA_GROUPS = "7169,7170,7445,7486,7558,7625,7660,7712,7766,7786";

const apiSidra = axios.create({
  baseURL: "https://apisidra.ibge.gov.br/values",
});

const apiAgregados = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v3",
});

export async function getIPCAData() {
  const { data } = await apiSidra.get(
    `/t/1419/n1/all/v/all/p/all/c315/${IPCA_GROUPS}`
  );
  return data;
}

export async function getAgregados(periodo = "P5[202001]") {
  const { data } = await apiAgregados.get(`/agregados?periodo=${periodo}`);
  return data;
}

/**
 * Busca os metadados de um agregado específico.
 * @param {string} agregadoId - O ID do agregado a ser consultado.
 */
export async function getAgregadoMetadados(agregadoId) {
  const { data } = await apiAgregados.get(`/agregados/${agregadoId}/metadados`);
  return data;
}

export function processIPCAData(data) {
  if (!data || data.length <= 1) {
    return [];
  }

  const jsonData = data.slice(1);

  const groupedData = jsonData.reduce((acc, item) => {
    const groupName = item['D4N'];
    if (!acc[groupName]) {
      acc[groupName] = {
        groupName,
        data: [],
      };
    }
    acc[groupName].data.push({
      variable: item['D2N'],
      month: item['D3N'],
      monthCode: item['D3C'],
      value: parseFloat(item.V),
    });
    return acc;
  }, {});

  return Object.values(groupedData);
}
