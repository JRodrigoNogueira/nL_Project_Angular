import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaFisicaRoutingModule } from './pessoa-fisica-routing.module';
import { PessoaFisicaDetailsComponent } from './components/pessoa-fisica-details/pessoa-fisica-details.component';
import { PessoaFisicaPainelComponent } from './components/pessoa-fisica-painel/pessoa-fisica-painel.component';
import { SharedModule } from '../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    PessoaFisicaDetailsComponent,
    PessoaFisicaPainelComponent
  ],
  imports: [
    CommonModule,
    PessoaFisicaRoutingModule,
    SharedModule,
    TextMaskModule,
  ]
})
export class PessoaFisicaModule { }
