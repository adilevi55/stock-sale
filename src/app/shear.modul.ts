import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormatModule } from './products/product-format/module/product-format.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    AngualrMaterialModule,
    ProductFormatModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class ShearModule { }
