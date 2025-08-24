import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SimulacaoService } from '../../../services/simulacao/simulacao.service';
import { SimulacaoRequest } from '../../../models/simulacao.model';

@Component({
  selector: 'app-simulacao-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './simulacao-form.component.html',
  styleUrls: ['./simulacao-form.component.css'],
})
export class SimulacaoFormComponent implements OnInit {
  valorDesejado: number | null = null;
  prazoDesejado: number | null = null;

  constructor(
    private router: Router,
    private simulacaoService: SimulacaoService
  ) {}

  ngOnInit(): void {}

  simular(): void {
    const valor = Number(this.valorDesejado);
    const prazo = Number(this.prazoDesejado);

    if (valor && prazo) {
      const simulacaoRequest: SimulacaoRequest = {
        valorDesejado: valor,
        prazo: prazo,
      };

      console.log('Enviando request:', simulacaoRequest);

      this.simulacaoService.postSimulacao(simulacaoRequest).subscribe({
        next: (data) => {
          this.simulacaoService.setSimulacao(data); // guarda no service
          this.router.navigate(['/resultado']); // navega para o resultado
        },
        error: (err) => {
          console.error('Erro ao enviar requisição:', err);
          alert('Erro ao simular. Verifique os dados e tente novamente.');
        },
      });
    } else {
      alert('Por favor, preencha o valor e o prazo para simular.');
    }
  }

  limparCampos(): void {
    this.valorDesejado = null;
    this.prazoDesejado = null;
  }
}
