import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormatComponent } from '../component/product-format.component';



@NgModule({
  declarations: [ProductFormatComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductFormatComponent]
})
export class ProductFormatModule { }
