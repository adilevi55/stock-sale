import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardNavbarComponent } from '../component/product-dashboard-navbar.component';



@NgModule({
  declarations: [ProductDashboardNavbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductDashboardNavbarComponent
  ]
})
export class ProductsDashboardNavbarModule { }
