/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulacaoMonitoramentoService } from './simulacao-monitoramento.service';

describe('Service: SimulacaoMonitoramento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacaoMonitoramentoService]
    });
  });

  it('should ...', inject([SimulacaoMonitoramentoService], (service: SimulacaoMonitoramentoService) => {
    expect(service).toBeTruthy();
  }));
});
