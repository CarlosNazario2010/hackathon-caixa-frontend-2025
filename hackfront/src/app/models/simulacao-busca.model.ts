export interface ParcelaBusca {
  numero: number;
  valorAmortizacao: number;
  valorJuros: number;
  valorPrestacao: number;
}

export interface ResultadoBuscaItem {
  tipo: string;
  parcelas: ParcelaBusca[];
}

export interface SimulacaoBuscaDados {
  idSimulacao: number;
  codigoProduto: number;
  descricaoProduto: string;
  taxaJuros: number;
  valorDesejado: number;
  prazo: number;
  resultadoSimulacao: ResultadoBuscaItem[];
}