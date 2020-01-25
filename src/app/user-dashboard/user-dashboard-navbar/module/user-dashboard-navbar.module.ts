import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardNavbarRoutingModule } from './user-dashboard-navbar-routing.module';
import { UserDashboardNavbarComponent } from '../component/user-dashboard-navbar.component';
import { ShearModule } from 'src/app/shear.modul';


@NgModule({
  declarations: [UserDashboardNavbarComponent],
  imports: [
    ShearModule,
    UserDashboardNavbarRoutingModule
  ], exports: [
    UserDashboardNavbarComponent
  ]
})
export class UserDashboardNavbarModule { }
