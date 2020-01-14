import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from '../component/product-dashboard/product-dashboard.component';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';



@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule,
    ShearModule,
    ProductsDashboardRoutingModule
  ],
  exports: [ProductDashboardComponent, ProductsDashboardRoutingModule]
})
export class ProductsDashboardModule { }
