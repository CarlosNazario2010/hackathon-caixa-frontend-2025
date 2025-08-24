/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulacaoBuscaService } from './simulacao-busca.service';

describe('Service: SimulacaoBusca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacaoBuscaService]
    });
  });

  it('should ...', inject([SimulacaoBuscaService], (service: SimulacaoBuscaService) => {
    expect(service).toBeTruthy();
  }));
});
