import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNovoServicoComponent } from './formulario-novo-servico.component';

describe('FormularioNovoServicoComponent', () => {
  let component: FormularioNovoServicoComponent;
  let fixture: ComponentFixture<FormularioNovoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNovoServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNovoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
