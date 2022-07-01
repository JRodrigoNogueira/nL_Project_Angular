import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { PfLoginComponent } from './components/pf-login/pf-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SharedModule } from '../shared/shared.module';
import { PjLoginComponent } from './components/pj-login/pj-login.component';


@NgModule({
  declarations: [
    PfLoginComponent,
    AdminLoginComponent,
    PjLoginComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
  ]
})
export class AuthenticationModule { }
