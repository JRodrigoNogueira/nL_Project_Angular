import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFisicaDetailsComponent } from './pessoa-fisica-details.component';

describe('PessoaFisicaDetailsComponent', () => {
  let component: PessoaFisicaDetailsComponent;
  let fixture: ComponentFixture<PessoaFisicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaFisicaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFisicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
