import { NgModule } from '@angular/core';
import { ProductsNavPhoneComponent } from '../component/products-nav-phone.component';
import { RouterModule } from '@angular/router';
import { AngualrMaterialModule } from 'src/app/angular-material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ProductsNavPhoneComponent],
  imports: [
    AngualrMaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: [ProductsNavPhoneComponent]
})
export class ProductsNavPhoneModule { }
