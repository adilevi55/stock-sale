import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormatModule } from './products/product-format/module/product-format.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginatorModule } from './paginator/module/paginator.module';

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
    PaginatorModule
  ]
})
export class ShearModule { }
