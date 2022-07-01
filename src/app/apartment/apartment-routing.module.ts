import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ApartmentPainelComponent } from './components/apartment-painel/apartment-painel.component';

const routes: Routes = [
  { path: "", component: ApartmentPainelComponent },
  { path: ":id", component: ApartmentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRoutingModule { }
