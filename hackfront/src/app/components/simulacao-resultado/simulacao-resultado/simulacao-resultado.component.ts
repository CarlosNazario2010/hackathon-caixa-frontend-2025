import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { SimulacaoService } from '../../../services/simulacao/simulacao.service';
import { SimulacaoGeral } from '../../../models/simulacao.model';


@Component({
  selector: 'app-simulacao-resultado',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './simulacao-resultado.component.html',
  styleUrls: ['./simulacao-resultado.component.css']
})
export class SimulacaoResultadoComponent implements OnInit {

  simulacaoData!: SimulacaoGeral;

  constructor(
    private router: Router,
    private simulacaoService: SimulacaoService
  ) {}

  ngOnInit(): void {
    const data = this.simulacaoService.getSimulacao();
    if (data) {
      this.simulacaoData = data;
    } else {
      // fallback: se não tiver dados, volta pro formulário
      this.router.navigate(['/']);
    }
  }

  voltarParaFormulario(): void {
    this.router.navigate(['/']);
  }
}

