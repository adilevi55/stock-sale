import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from '../component/product-dashboard/product-dashboard.component';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { ProductsDashboardNavbarModule } from '../products-dashboard-navbar/module/products-dashboard-navbar.module';



@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule,
    ShearModule,
    ProductsDashboardRoutingModule,
    ProductsDashboardNavbarModule
  ],
  exports: [ProductDashboardComponent, ProductsDashboardRoutingModule]
})
export class ProductsDashboardModule { }
