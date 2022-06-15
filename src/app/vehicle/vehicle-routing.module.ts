import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehiclePainelComponent } from './components/vehicle-painel/vehicle-painel.component';

const routes: Routes = [
  { path: "", component: VehiclePainelComponent },
  { path: ":id", component: VehicleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
