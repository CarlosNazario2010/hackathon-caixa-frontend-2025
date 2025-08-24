/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimulacaoResultadoBuscaComponent } from './simulacao-resultado-busca.component';

describe('SimulacaoResultadoBuscaComponent', () => {
  let component: SimulacaoResultadoBuscaComponent;
  let fixture: ComponentFixture<SimulacaoResultadoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacaoResultadoBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoResultadoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
