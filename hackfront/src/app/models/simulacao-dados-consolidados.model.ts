// Interface que representa cada item individual de consolidados (SAC ou PRICE)
export interface ConsolidadosItem {
  codigo: number;
  descricao: string;
  taxaMediaDeJuros: number;
  valorMedioDasPrestacoes: number;
  valorTotalDosValoresSolicitados: number;
  somaDeTodasAsPrestacoes: number;
}

// Interface que representa o conjunto de dados consolidados, separando SAC e PRICE
export interface DadosConsolidados {
  listaSac: ConsolidadosItem[];
  listaPrice: ConsolidadosItem[];
}

