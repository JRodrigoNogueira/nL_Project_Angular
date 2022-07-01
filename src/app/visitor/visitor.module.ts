import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorDetailsComponent } from './components/visitor-details/visitor-details.component';
import { VisitorPainelComponent } from './components/visitor-painel/visitor-painel.component';
import { SharedModule } from '../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    VisitorDetailsComponent,
    VisitorPainelComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    TextMaskModule,
  ]
})
export class VisitorModule { }
