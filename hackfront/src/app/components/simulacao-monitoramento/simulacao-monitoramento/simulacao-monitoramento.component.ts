import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, DatePipe, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Monitoramento } from '../../../models/simulacao-monitoramento.model';
import { SimulacaoMonitoramentoService } from '../../../services/simulacao-monitoramento/simulacao-monitoramento.service';

@Component({
  selector: 'app-simulacao-monitoramento',
  standalone: true,
  imports: [CommonModule, NgIf],
  providers: [DatePipe, DecimalPipe],
  templateUrl: './simulacao-monitoramento.component.html',
  styleUrls: ['./simulacao-monitoramento.component.css'],
})
export class SimulacaoMonitoramentoComponent implements OnInit {
  monitoramentoData: Monitoramento | null = null;

  constructor(
    private router: Router,
    private monitoramentoService: SimulacaoMonitoramentoService
  ) {}

  ngOnInit(): void {
    this.monitoramentoService.buscarMonitoramento().subscribe({
      next: (data) => (this.monitoramentoData = data),
      error: (err) => {
        console.error('Erro ao buscar monitoramento da API:', err);
        alert('Não foi possível carregar os dados de monitoramento.');
      },
    });
  }

  voltarParaDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
