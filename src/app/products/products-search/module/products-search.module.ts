import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from '../component/products-search.component';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsSearchRoutingModule } from './products-search-routing.module';



@NgModule({
  declarations: [ProductsSearchComponent],
  imports: [
    CommonModule,
    ShearModule,
    ProductsSearchRoutingModule
  ],
  exports: [ProductsSearchComponent ]
})
export class ProductsSearchModule { }
