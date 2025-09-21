import {
  DetailsContainer,
  InfoHeader,
  MetadataSection,
  MetadataList,
  MetadataTitle,
} from './styles';

// Componente para exibir os metadados de um agregado
export default function AgregadoDetails({ metadados }) {
  if (!metadados) {
    return null;
  }

  const { nome, id, assunto, variaveis, classificacoes } = metadados;

  return (
    <DetailsContainer>
      <InfoHeader>
        <h3>{nome}</h3>
        <p><strong>ID:</strong> {id} | <strong>Assunto:</strong> {assunto}</p>
      </InfoHeader>

      <MetadataSection>
        <MetadataTitle>Variáveis Disponíveis</MetadataTitle>
        <MetadataList>
          {(variaveis || []).map(v => <li key={v.id}>{v.nome} ({v.unidade})</li>)}
        </MetadataList>
      </MetadataSection>

      <MetadataSection>
        <MetadataTitle>Classificações</MetadataTitle>
        <MetadataList>
          {(classificacoes || []).map(c => <li key={c.id}>{c.nome}</li>)}
        </MetadataList>
      </MetadataSection>
    </DetailsContainer>
  );
}
