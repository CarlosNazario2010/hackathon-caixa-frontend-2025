import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosConsolidados } from '../../../models/simulacao-dados-consolidados.model';
import { SimulacaoConsolidadosTabelaComponent } from '../simulacao-consolidadas-tabela/simulacao-consolidadas-tabela.component';
import { SimulacaoConsolidadosService } from '../../../services/simulacao-consolidados/simulacao-consolidados.service';

@Component({
  selector: 'app-simulacao-consolidadas',
  standalone: true,
  imports: [CommonModule, FormsModule, SimulacaoConsolidadosTabelaComponent],
  templateUrl: './simulacao-consolidadas.component.html',
  styleUrls: ['./simulacao-consolidadas.component.css'],
})
export class SimulacaoConsolidadasComponent {
  dataFiltro: string = '';
  exibirTabela: boolean = false;
  dadosTabela: DadosConsolidados | null = null;
  buscaRealizada = false; // controla se já houve tentativa de buscar

  constructor(
    private router: Router,
    private consolidadosService: SimulacaoConsolidadosService
  ) {}

  buscarDados(): void {
    this.buscaRealizada = true;

    if (!this.dataFiltro) {
      this.exibirTabela = false;
      this.dadosTabela = null;
      return;
    }

    this.consolidadosService.buscarConsolidados(this.dataFiltro).subscribe({
      next: (dados) => {
        console.log('Dados recebidos do backend:', dados);
        this.dadosTabela = dados;
        const temDados =
          dados &&
          ((dados.listaSac && dados.listaSac.length > 0) ||
            (dados.listaPrice && dados.listaPrice.length > 0));

        if (temDados) {
          this.dadosTabela = dados;
          this.exibirTabela = true;
          this.buscaRealizada = true; // só marca true se houver dados
        }
      },
      error: (err) => {
        console.error('Erro ao buscar dados consolidados:', err);
        alert('Não foi possível carregar os dados consolidados.');
      },
    });
  }

  limparCampo(): void {
    this.buscaRealizada = false;
    this.dataFiltro = '';
    this.exibirTabela = false;
    this.dadosTabela = null;
  }

  voltarParaDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
