import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistrarComponent } from './boton-registrar.component';

describe('BotonRegistrarComponent', () => {
  let component: BotonRegistrarComponent;
  let fixture: ComponentFixture<BotonRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonRegistrarComponent]
    });
    fixture = TestBed.createComponent(BotonRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
