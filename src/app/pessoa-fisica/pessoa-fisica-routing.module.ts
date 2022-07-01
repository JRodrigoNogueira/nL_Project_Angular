import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFisicaDetailsComponent } from './components/pessoa-fisica-details/pessoa-fisica-details.component';
import { PessoaFisicaPainelComponent } from './components/pessoa-fisica-painel/pessoa-fisica-painel.component';

const routes: Routes = [
  { path: ":id", component: PessoaFisicaDetailsComponent },
  { path: "painel/:id", component: PessoaFisicaPainelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaFisicaRoutingModule { }
