/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulacaoConsolidadosService } from './simulacao-consolidados.service';

describe('Service: SimulacaoConsolidados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacaoConsolidadosService]
    });
  });

  it('should ...', inject([SimulacaoConsolidadosService], (service: SimulacaoConsolidadosService) => {
    expect(service).toBeTruthy();
  }));
});
