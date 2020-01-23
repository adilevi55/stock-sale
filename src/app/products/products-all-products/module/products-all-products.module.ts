import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAllProductsComponent } from '../component/products-all-products.component';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsAllProductsRoutingModule } from './products-all-products-routing.module';



@NgModule({
  declarations: [ProductsAllProductsComponent],
  imports: [
    CommonModule,
    ShearModule,
    ProductsAllProductsRoutingModule
  ],
  exports: [ProductsAllProductsComponent]
})
export class ProductsAllProductsModule { }
