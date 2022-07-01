import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaJuridicaRoutingModule } from './pessoa-juridica-routing.module';
import { PessoaJuridicaPainelComponent } from './components/pessoa-juridica-painel/pessoa-juridica-painel.component';
import { PessoaJuridicaDetailsComponent } from './components/pessoa-juridica-details/pessoa-juridica-details.component';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    PessoaJuridicaPainelComponent,
    PessoaJuridicaDetailsComponent
  ],
  imports: [
    CommonModule,
    PessoaJuridicaRoutingModule,
    SharedModule,
    TextMaskModule,
  ]
})
export class PessoaJuridicaModule { }
