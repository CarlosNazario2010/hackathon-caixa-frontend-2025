/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimulacaoConsolidadasTabelaComponent } from './simulacao-consolidadas-tabela.component';

describe('SimulacaoConsolidadasTabelaComponent', () => {
  let component: SimulacaoConsolidadasTabelaComponent;
  let fixture: ComponentFixture<SimulacaoConsolidadasTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacaoConsolidadasTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoConsolidadasTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
