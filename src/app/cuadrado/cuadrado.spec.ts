import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadrado } from './cuadrado';

describe('Cuadrado', () => {
  let component: Cuadrado;
  let fixture: ComponentFixture<Cuadrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cuadrado],
    }).compileComponents();

    fixture = TestBed.createComponent(Cuadrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
