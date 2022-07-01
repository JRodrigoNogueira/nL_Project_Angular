import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApartmentPainelComponent } from './components/apartment-painel/apartment-painel.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';


@NgModule({
  declarations: [
    ApartmentPainelComponent,
    ApartmentDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
    SharedModule,
  ]
})
export class ApartmentModule { }
