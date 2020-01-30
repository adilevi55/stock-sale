import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsNavDeskTopComponent } from '../component/products-nav-desk-top.component';
import { AngualrMaterialModule } from 'src/app/angular-material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ProductsNavDeskTopComponent],
  imports: [
    AngualrMaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [ProductsNavDeskTopComponent]
})
export class ProductsNavDeskTopModule { }
