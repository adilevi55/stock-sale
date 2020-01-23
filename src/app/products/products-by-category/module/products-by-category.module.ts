import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByCategoryComponent } from '../component/products-by-category.component';
import { ProductsByCategoryRoutingModule } from './products-by-category-routing.module';
import { ShearModule } from 'src/app/shear.modul';



@NgModule({
  declarations: [ProductsByCategoryComponent],
  imports: [
    CommonModule,
    ProductsByCategoryRoutingModule,
    ShearModule
  ],
  exports: [ProductsByCategoryComponent, ProductsByCategoryRoutingModule]
})
export class ProductsByCategoryModule { }
