import { NgModule } from '@angular/core';
import { UserDashboardDetailsRoutingModule } from './user-dashboard-details-routing.module';
import { UserDashboardDetailsComponent } from '../component/user-dashboard-details.component';
import { ShearModule } from 'src/app/shear.modul';


@NgModule({
  declarations: [UserDashboardDetailsComponent],
  imports: [
    ShearModule,
    UserDashboardDetailsRoutingModule
  ], exports: [
    UserDashboardDetailsComponent
  ]
})
export class UserDashboardDetailsModule { }
