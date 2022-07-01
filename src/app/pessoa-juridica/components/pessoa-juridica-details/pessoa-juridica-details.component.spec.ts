import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaJuridicaDetailsComponent } from './pessoa-juridica-details.component';

describe('PessoaJuridicaDetailsComponent', () => {
  let component: PessoaJuridicaDetailsComponent;
  let fixture: ComponentFixture<PessoaJuridicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaJuridicaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaJuridicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
