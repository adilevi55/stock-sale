import { NgModule } from '@angular/core';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardDetailsModule } from '../user-dashboard-details/module/user-dashboard-details.module';
import { ShearModule } from 'src/app/shear.modul';
import { UserDashboardNavbarModule } from '../user-dashboard-navbar/module/user-dashboard-navbar.module';
import { UserDashboardComponent } from '../component/user-dashboard.component';


@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    ShearModule,
    UserDashboardRoutingModule,
    UserDashboardDetailsModule,
    UserDashboardNavbarModule
  ]
})
export class UserDashboardModule { }
