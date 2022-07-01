import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaJuridicaPainelComponent } from './pessoa-juridica-painel.component';

describe('PessoaJuridicaPainelComponent', () => {
  let component: PessoaJuridicaPainelComponent;
  let fixture: ComponentFixture<PessoaJuridicaPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaJuridicaPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaJuridicaPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
