import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulacaoBuscaDados } from '../../models/simulacao-busca.model';

@Injectable({
  providedIn: 'root',
})
export class SimulacaoBuscaService {
  private apiUrl = 'http://localhost:8080/api/simulacao';

  constructor(private http: HttpClient) {}

  buscarPorId(id: string | number): Observable<SimulacaoBuscaDados> {
    return this.http.get<SimulacaoBuscaDados>(`${this.apiUrl}/${id}`);
  }
}
