// interface que define as propriedades de paginação

export default interface PaginationProps {
  paginaAtual: number;
  totalPaginas: number;
  onAnterior: () => void;
  onProxima: () => void;
}