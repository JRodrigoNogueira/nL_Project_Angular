import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PfLoginComponent } from './components/pf-login/pf-login.component';
import { PjLoginComponent } from './components/pj-login/pj-login.component';


const routes: Routes = [
  { path: 'pF', component: PfLoginComponent },
  { path: 'pJ', component: PjLoginComponent },
  { path: 'admin', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
