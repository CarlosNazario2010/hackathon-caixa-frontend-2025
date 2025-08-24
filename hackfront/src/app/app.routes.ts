import { Routes } from '@angular/router';
import { SimulacaoFormComponent } from './components/simulacao-form/simulacao-form/simulacao-form.component';
import { SimulacaoResultadoComponent } from './components/simulacao-resultado/simulacao-resultado/simulacao-resultado.component';
import { SimulacaoBuscaComponent } from './components/simulacao-busca/simulacao-busca/simulacao-busca.component';
import { SimulacaoDashboardComponent } from './components/simulacao-dashboard/simulacao-dashboard/simulacao-dashboard.component';
import { SimulacaoResultadoBuscaComponent } from './components/simulacao-resultado-busca/simulacao-resultado-busca/simulacao-resultado-busca.component';
import { SimulacaoResumoComponent } from './components/simulacao-resumo/simulacao-resumo/simulacao-resumo.component';
import { SimulacaoMonitoramentoComponent } from './components/simulacao-monitoramento/simulacao-monitoramento/simulacao-monitoramento.component';
import { SimulacaoConsolidadasComponent } from './components/simulacao-consolidadas/simulacao-consolidadas/simulacao-consolidadas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SimulacaoDashboardComponent },
  { path: 'simular', component: SimulacaoFormComponent },
  { path: 'resultado', component: SimulacaoResultadoComponent },
  { path: 'buscar', component: SimulacaoBuscaComponent },
  { path: 'buscar-resultado/:id', component: SimulacaoResultadoBuscaComponent },
  { path: 'resumo', component: SimulacaoResumoComponent },
  { path: 'consolidados', component: SimulacaoConsolidadasComponent },
  { path: 'monitoramento', component: SimulacaoMonitoramentoComponent }
];