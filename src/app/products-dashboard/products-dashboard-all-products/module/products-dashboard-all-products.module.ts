import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardAllProductsComponent } from '../component/product-dashboard-all-products/product-dashboard-all-products.component';

@NgModule({
  declarations: [ProductDashboardAllProductsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductDashboardAllProductsComponent
  ]
})
export class ProductsDashboardAllProductsModule { }
