import { NgModule } from '@angular/core';
import { ProductFormatComponent } from '../component/product-format.component';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from 'src/app/angular-material.module';
import { PaginatorModule } from 'src/app/paginator/module/paginator.module';



@NgModule({
  declarations: [ProductFormatComponent],
  imports: [
    CommonModule,
    AngualrMaterialModule,
    PaginatorModule
  ],
  exports: [ProductFormatComponent]
})
export class ProductFormatModule { }
