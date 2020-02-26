import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from '../component/products-search.component';
import { ProductsSearchRoutingModule } from './products-search-routing.module';
import { ShearModule } from 'src/app/shear.modul';

@NgModule({
  declarations: [ProductsSearchComponent],
  imports: [
    CommonModule,
    ProductsSearchRoutingModule,
    ShearModule
  ],
  exports: [ProductsSearchComponent ]
})
export class ProductsSearchModule { }
