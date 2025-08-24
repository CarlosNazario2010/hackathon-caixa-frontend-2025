// request enviado
export interface SimulacaoRequest {
  valorDesejado: number;
  prazo: number;
}

// resposta do backend
export interface SimulacaoResponse {
  idSimulacao: number;
  codigoProduto: number;
  descricaoProduto: string;
  taxaJuros: number;
  valorDesejado: number;
  prazo: number;
  resultadoSimulacao: ResultadoSimulacaoItem[];
}

export interface ResultadoSimulacaoItem {
  tipo: 'SAC' | 'PRICE';
  parcelas: ParcelaResponse[];
}

export interface ParcelaResponse {
  numero: number;
  valorAmortizacao: number;
  valorJuros: number;
  valorPrestacao: number;
}

// Modelo usado no componente
export interface SimulacaoGeral {
  idSimulacao: string;
  valorDesejado: number;
  prazo: number;
  codigo: number;
  descricao: string;
  taxaJuros: number;
  listaSac: ResultadoParcela[];
  listaPrice: ResultadoParcela[];
}

export interface ResultadoParcela {
  parcela: number;
  juros: number;
  amortizacao: number;
  valorPrestacao: number;
  saldoDevedor: number;
}
