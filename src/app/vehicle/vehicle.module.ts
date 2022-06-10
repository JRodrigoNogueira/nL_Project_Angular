import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehiclePainelComponent } from './components/vehicle-painel/vehicle-painel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VehicleDetailsComponent,
    VehiclePainelComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedModule
  ]
})
export class VehicleModule { }
