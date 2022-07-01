import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFisicaPainelComponent } from './pessoa-fisica-painel.component';

describe('PessoaFisicaPainelComponent', () => {
  let component: PessoaFisicaPainelComponent;
  let fixture: ComponentFixture<PessoaFisicaPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaFisicaPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFisicaPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
