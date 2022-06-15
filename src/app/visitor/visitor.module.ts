import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorDetailsComponent } from './components/visitor-details/visitor-details.component';
import { VisitorPainelComponent } from './components/visitor-painel/visitor-painel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VisitorDetailsComponent,
    VisitorPainelComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule
  ]
})
export class VisitorModule { }
