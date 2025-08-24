import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulacao-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simulacao-busca.component.html',
  styleUrls: ['./simulacao-busca.component.css']
})
export class SimulacaoBuscaComponent {

  simulacaoId: string = '';

  constructor(private router: Router) { }

  buscarSimulacao(): void {
    if (this.simulacaoId) {
      // Navega para a nova rota, passando o ID como parâmetro
      this.router.navigate(['/buscar-resultado', this.simulacaoId]);
    } else {
      console.warn('O campo de ID da simulação está vazio.');
    }
  }
}