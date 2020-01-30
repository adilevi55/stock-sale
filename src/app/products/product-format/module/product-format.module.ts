import { NgModule } from '@angular/core';
import { ProductFormatComponent } from '../component/product-format.component';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [ProductFormatComponent],
  imports: [
    CommonModule,
    AngualrMaterialModule
  ],
  exports: [ProductFormatComponent]
})
export class ProductFormatModule { }
