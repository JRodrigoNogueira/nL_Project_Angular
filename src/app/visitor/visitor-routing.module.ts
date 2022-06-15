import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorDetailsComponent } from './components/visitor-details/visitor-details.component';
import { VisitorPainelComponent } from './components/visitor-painel/visitor-painel.component';

const routes: Routes = [
  { path: "", component: VisitorPainelComponent },
  { path: ":id", component: VisitorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
