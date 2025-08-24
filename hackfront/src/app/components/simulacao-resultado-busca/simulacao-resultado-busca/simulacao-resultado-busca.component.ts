import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import {
  ParcelaBusca,
  SimulacaoBuscaDados,
} from '../../../models/simulacao-busca.model';
import { SimulacaoBuscaService } from '../../../services/simulacao-busca/simulacao-busca.service';

@Component({
  selector: 'app-simulacao-resultado-busca',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './simulacao-resultado-busca.component.html',
  styleUrls: ['./simulacao-resultado-busca.component.css'],
})
export class SimulacaoResultadoBuscaComponent implements OnInit {
  simulacaoData!: SimulacaoBuscaDados;
  listaSac: ParcelaBusca[] = [];
  listaPrice: ParcelaBusca[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private simulacaoService: SimulacaoBuscaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const simulacaoId = params.get('id');
      if (simulacaoId) {
        this.simulacaoService.buscarPorId(simulacaoId).subscribe({
          next: (data) => {
            this.simulacaoData = data;
            this.listaSac =
              data.resultadoSimulacao.find((r) => r.tipo === 'SAC')?.parcelas ||
              [];
            this.listaPrice =
              data.resultadoSimulacao.find((r) => r.tipo === 'PRICE')
                ?.parcelas || [];
          },
          error: (err) => {
            console.error('Erro ao buscar a simulação:', err);
            alert('Não foi possível encontrar a simulação. Verifique o ID.');
          },
        });
      } else {
        console.warn('ID da simulação não fornecido.');
      }
    });
  }

  voltarParaBusca(): void {
    this.router.navigate(['/dashboard']);
  }
}
