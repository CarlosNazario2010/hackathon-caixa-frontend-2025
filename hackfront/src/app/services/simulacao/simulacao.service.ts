import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  ParcelaResponse,
  ResultadoParcela,
  SimulacaoGeral,
  SimulacaoRequest,
  SimulacaoResponse,
} from '../../models/simulacao.model';

@Injectable({
  providedIn: 'root',
})
export class SimulacaoService {
  private apiUrl = 'http://localhost:8080/api/simulacao';

  private ultimaSimulacao?: SimulacaoGeral; // <- armazenar a última simulação

  constructor(private http: HttpClient) {}

  postSimulacao(data: SimulacaoRequest): Observable<SimulacaoGeral> {
    return this.http
      .post<SimulacaoResponse>(this.apiUrl, data)
      .pipe(map((res) => this.mapToSimulacaoGeral(res)));
  }

  setSimulacao(data: SimulacaoGeral): void {
    this.ultimaSimulacao = data;
  }

  getSimulacao(): SimulacaoGeral | undefined {
    return this.ultimaSimulacao;
  }

  // ---- mapeamento igual ao que você já tem ----
  private mapToSimulacaoGeral(res: SimulacaoResponse): SimulacaoGeral {
    const listaSac = this.mapParcelas(
      res.resultadoSimulacao.find((r) => r.tipo === 'SAC')?.parcelas || [],
      res.valorDesejado
    );

    const listaPrice = this.mapParcelas(
      res.resultadoSimulacao.find((r) => r.tipo === 'PRICE')?.parcelas || [],
      res.valorDesejado
    );

    return {
      idSimulacao: res.idSimulacao.toString(),
      valorDesejado: res.valorDesejado,
      prazo: res.prazo,
      codigo: res.codigoProduto,
      descricao: res.descricaoProduto,
      taxaJuros: res.taxaJuros,
      listaSac,
      listaPrice,
    };
  }

  private mapParcelas(
    parcelas: ParcelaResponse[],
    valorInicial: number
  ): ResultadoParcela[] {
    let saldoDevedor = valorInicial;
    return parcelas.map((p) => {
      saldoDevedor -= p.valorAmortizacao;
      return {
        parcela: p.numero,
        juros: p.valorJuros,
        amortizacao: p.valorAmortizacao,
        valorPrestacao: p.valorPrestacao,
        saldoDevedor: parseFloat(saldoDevedor.toFixed(2)), // arredonda
      };
    });
  }
}
