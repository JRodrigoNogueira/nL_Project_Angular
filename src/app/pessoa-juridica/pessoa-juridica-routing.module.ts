import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaJuridicaDetailsComponent } from './components/pessoa-juridica-details/pessoa-juridica-details.component';
import { PessoaJuridicaPainelComponent } from './components/pessoa-juridica-painel/pessoa-juridica-painel.component';


const routes: Routes = [
  { path: ":id", component: PessoaJuridicaDetailsComponent },
  { path: "painel/:id", component: PessoaJuridicaPainelComponent },
  { path: "painel/:id/:id2", component: PessoaJuridicaPainelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaJuridicaRoutingModule { }
