import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentDetailsComponent } from './components/resident-details/resident-details.component';
import { ResidentPainelComponent } from './components/resident-painel/resident-painel.component';

const routes: Routes = [
  { path: "", component: ResidentPainelComponent },
  { path: ":id", component: ResidentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }

