import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliarDetailsComponent } from './components/avaliar-details/avaliar-details.component';

const routes: Routes = [
  { path: ":id/:id2", component: AvaliarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliarRoutingModule { }
