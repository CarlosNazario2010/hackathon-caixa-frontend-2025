import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monitoramento } from '../../models/simulacao-monitoramento.model';

@Injectable({
  providedIn: 'root',
})
export class SimulacaoMonitoramentoService {
  private apiUrl = 'http://localhost:8080/api/simulacao/metrics/endpoint?uri=/api/simulacao';

  constructor(private http: HttpClient) {}

  buscarMonitoramento(): Observable<Monitoramento> {
    return this.http.get<Monitoramento>(this.apiUrl);
  }
}
