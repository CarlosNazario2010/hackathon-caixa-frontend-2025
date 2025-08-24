import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumoSimulacao } from '../../models/simulacao-resumo.model';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoResumoService {

  private apiUrl = 'http://localhost:8080/api/simulacao/resumo'; 

  constructor(private http: HttpClient) {}

  listarResumo(): Observable<ResumoSimulacao[]> {
    return this.http.get<ResumoSimulacao[]>(this.apiUrl);
  }
}
