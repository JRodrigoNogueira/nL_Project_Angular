import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeePainelComponent } from './components/employee-painel/employee-painel.component';
import { SharedModule } from '../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeePainelComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    TextMaskModule,
  ]
})
export class EmployeeModule { }
