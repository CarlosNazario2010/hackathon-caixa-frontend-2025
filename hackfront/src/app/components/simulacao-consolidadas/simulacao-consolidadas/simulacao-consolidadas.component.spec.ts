/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimulacaoConsolidadasComponent } from './simulacao-consolidadas.component';

describe('SimulacaoConsolidadasComponent', () => {
  let component: SimulacaoConsolidadasComponent;
  let fixture: ComponentFixture<SimulacaoConsolidadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacaoConsolidadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoConsolidadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
