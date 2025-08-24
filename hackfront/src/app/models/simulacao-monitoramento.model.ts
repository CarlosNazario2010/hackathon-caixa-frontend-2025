export interface Monitoramento {
  dataAcesso: string;
  endpointAcessado: string;
  quantidadeRequisicoes: number;
  tempoMedioMs: number;
  tempoMinimoMs: number;
  tempoMaximoMs: number;
  percentualSucesso: number;
}