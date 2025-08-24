import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { DadosConsolidados, ConsolidadosItem } from '../../../models/simulacao-dados-consolidados.model';

@Component({
  selector: 'app-simulacao-consolidados-tabela',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PercentPipe],
  templateUrl: './simulacao-consolidadas-tabela.component.html',
  styleUrls: ['./simulacao-consolidadas-tabela.component.css']
})
export class SimulacaoConsolidadosTabelaComponent implements OnChanges {

  @Input() dadosConsolidados?: DadosConsolidados;

  produtosConsolidados: { sac: ConsolidadosItem, price: ConsolidadosItem }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dadosConsolidados) {
      this.consolidarProdutos();
    }
  }

  private consolidarProdutos(): void {
    this.produtosConsolidados = [];
    if (!this.dadosConsolidados?.listaSac || !this.dadosConsolidados?.listaPrice) return;

    const priceMap = new Map(this.dadosConsolidados.listaPrice.map(item => [item.codigo, item]));

    this.dadosConsolidados.listaSac.forEach(sacItem => {
      const priceItem = priceMap.get(sacItem.codigo);
      if (priceItem) {
        this.produtosConsolidados.push({ sac: sacItem, price: priceItem });
      }
    });
  }
}
