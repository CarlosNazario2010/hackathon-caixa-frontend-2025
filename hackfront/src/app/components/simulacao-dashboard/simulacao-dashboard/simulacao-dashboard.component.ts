import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoFormComponent } from '../../simulacao-form/simulacao-form/simulacao-form.component';
import { SimulacaoBuscaComponent } from '../../simulacao-busca/simulacao-busca/simulacao-busca.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-simulacao-dashboard',
  standalone: true,
  imports: [CommonModule, 
    SimulacaoFormComponent, 
    SimulacaoBuscaComponent,
    RouterModule
  ], 
  templateUrl: './simulacao-dashboard.component.html',
  styleUrls: ['./simulacao-dashboard.component.css']
})
export class SimulacaoDashboardComponent {

}