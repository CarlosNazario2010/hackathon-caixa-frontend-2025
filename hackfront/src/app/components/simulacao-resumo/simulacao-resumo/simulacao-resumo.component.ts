import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ResumoSimulacao } from '../../../models/simulacao-resumo.model';
import { SimulacaoResumoService } from '../../../services/simulacao-resumo/simulacao-resumo.service';

@Component({
  selector: 'app-simulacao-resumo',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './simulacao-resumo.component.html',
  styleUrls: ['./simulacao-resumo.component.css'],
})
export class SimulacaoResumoComponent implements OnInit {
  simulacoes: ResumoSimulacao[] = [];

  constructor(
    private router: Router,
    private resumoService: SimulacaoResumoService
  ) {}

  ngOnInit(): void {
    this.resumoService.listarResumo().subscribe({
      next: (data) => (this.simulacoes = data),
      error: (err) => {
        console.error('Erro ao buscar resumo de simulações:', err);
        alert('Não foi possível carregar o resumo de simulações.');
      },
    });
  }

  voltarParaDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
