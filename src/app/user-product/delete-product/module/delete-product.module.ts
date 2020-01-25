import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteProductRoutingModule } from './delete-product-routing.module';
import { DeleteProductComponent } from '../component/delete-product.component';
import { ShearModule } from 'src/app/shear.modul';


@NgModule({
  declarations: [DeleteProductComponent],
  imports: [
    ShearModule,
    DeleteProductRoutingModule
  ],
  exports: [
    DeleteProductComponent
  ]
})
export class DeleteProductModule { }
