import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosConsolidados } from '../../models/simulacao-dados-consolidados.model';

@Injectable({
  providedIn: 'root',
})
export class SimulacaoConsolidadosService {
  private apiUrl = 'http://localhost:8080/api/simulacao/agregada';

  constructor(private http: HttpClient) {}

  buscarConsolidados(data: string): Observable<DadosConsolidados> {
    return this.http.get<DadosConsolidados>(`${this.apiUrl}?data=${data}`);
  }
}
