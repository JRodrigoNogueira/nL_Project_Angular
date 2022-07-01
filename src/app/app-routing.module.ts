import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',
    component: NavigationComponent,
    children: [
      { path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'login',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
      { path: 'pF',
        loadChildren: () => import('./pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaModule)},
      { path: 'pJ',
        loadChildren: () => import('./pessoa-juridica/pessoa-juridica.module').then(m => m.PessoaJuridicaModule)},
      { path: 'avaliar',
        loadChildren: () => import('./avaliar/avaliar.module').then(m => m.AvaliarModule)},
      { path: 'vehicle',
        loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule)},
      { path: 'visitor',
        loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)},
      { path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
      { path: 'apartment',
        loadChildren: () => import('./apartment/apartment.module').then(m => m.ApartmentModule)},
    ]
},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
