import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentRoutingModule } from './resident-routing.module';
import { ResidentPainelComponent } from './components/resident-painel/resident-painel.component';
import { ResidentDetailsComponent } from './components/resident-details/resident-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ResidentPainelComponent,
    ResidentDetailsComponent,
  ],
  imports: [
    CommonModule,
    ResidentRoutingModule,
    SharedModule,
  ]
})
export class ResidentModule { }
