// Interface de resumo de simulação
export interface ResumoSimulacao {
  idSimulacao: number;
  codigoProduto: number;
  descricaoProduto: string;
  taxaJuros: number;
  valorDesejado: number;
  prazo: number;
  valorTotalParcelasSAC: number;
  valorTotalParcelasPRICE: number;
}