/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulacaoService } from './simulacao.service';

describe('Service: Simulacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacaoService]
    });
  });

  it('should ...', inject([SimulacaoService], (service: SimulacaoService) => {
    expect(service).toBeTruthy();
  }));
});
