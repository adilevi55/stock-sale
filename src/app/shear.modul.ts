import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormatModule } from './products/product-format/module/product-format.module';

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

  ]
})
export class ShearModule { }
