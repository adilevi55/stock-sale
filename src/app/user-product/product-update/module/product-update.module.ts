import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductUpdateRoutingModule } from './product-update-routing.module';
import { ProductUpdateComponent } from '../component/product-update.component';
import { ShearModule } from 'src/app/shear.modul';


@NgModule({
  declarations: [ProductUpdateComponent],
  imports: [
    ShearModule,
    ProductUpdateRoutingModule
  ],
  exports: [
    ProductUpdateComponent
  ]
})
export class ProductUpdateModule { }
