/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulacaoResumoService } from './simulacao-resumo.service';

describe('Service: SimulacaoResumo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacaoResumoService]
    });
  });

  it('should ...', inject([SimulacaoResumoService], (service: SimulacaoResumoService) => {
    expect(service).toBeTruthy();
  }));
});
