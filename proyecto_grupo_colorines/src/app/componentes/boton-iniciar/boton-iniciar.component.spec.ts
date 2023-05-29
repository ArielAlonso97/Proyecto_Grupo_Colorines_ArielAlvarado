import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonIniciarComponent } from './boton-iniciar.component';

describe('BotonIniciarComponent', () => {
  let component: BotonIniciarComponent;
  let fixture: ComponentFixture<BotonIniciarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonIniciarComponent]
    });
    fixture = TestBed.createComponent(BotonIniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
