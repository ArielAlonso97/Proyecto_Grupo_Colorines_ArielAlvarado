import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaUsuarioComponent } from './forma-usuario.component';

describe('FormaUsuarioComponent', () => {
  let component: FormaUsuarioComponent;
  let fixture: ComponentFixture<FormaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
