import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliarRoutingModule } from './avaliar-routing.module';
import { AvaliarDetailsComponent } from './components/avaliar-details/avaliar-details.component';


@NgModule({
  declarations: [
    AvaliarDetailsComponent
  ],
  imports: [
    CommonModule,
    AvaliarRoutingModule,
    SharedModule
  ]
})
export class AvaliarModule { }
