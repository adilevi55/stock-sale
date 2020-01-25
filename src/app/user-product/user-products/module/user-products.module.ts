import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShearModule } from 'src/app/shear.modul';
import { UserProductsRoutingModule } from './user-products-routing.module';
import { UserProductsComponent } from '../component/user-products.component';



@NgModule({
  declarations: [UserProductsComponent],
  imports: [
    ShearModule,
    UserProductsRoutingModule
  ],
  exports: [
    UserProductsRoutingModule,
    UserProductsComponent
  ]
})
export class UserProductsModule { }
