import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormatModule } from './products/product-format/module/product-format.module';
import { ProductsNavModule } from './products/products-nav/module/products-nav.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    AngualrMaterialModule,
    ProductFormatModule,
    CommonModule,
    ReactiveFormsModule,
    ProductsNavModule,

  ]
})
export class ShearModule { }
