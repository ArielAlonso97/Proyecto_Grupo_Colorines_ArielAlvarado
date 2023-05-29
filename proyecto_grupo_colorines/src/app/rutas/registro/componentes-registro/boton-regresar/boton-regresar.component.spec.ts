import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegresarComponent } from './boton-regresar.component';

describe('BotonRegresarComponent', () => {
  let component: BotonRegresarComponent;
  let fixture: ComponentFixture<BotonRegresarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonRegresarComponent]
    });
    fixture = TestBed.createComponent(BotonRegresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
