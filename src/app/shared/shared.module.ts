import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';


import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


var module = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  RouterModule,
  FlexLayoutModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    module,
  ],
  exports: [
    module
  ]
})

export class SharedModule {}
