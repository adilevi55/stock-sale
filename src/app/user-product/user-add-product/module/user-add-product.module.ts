import { NgModule } from '@angular/core';
import { UserAddProductRoutingModule } from './user-add-product-routing.module';
import { UserAddProductComponent } from '../component/user-add-product.component';
import { ShearModule } from 'src/app/shear.modul';


@NgModule({
  declarations: [UserAddProductComponent],
  imports: [
    ShearModule,
    UserAddProductRoutingModule,
  ],
  exports: [
    UserAddProductComponent
  ]
})
export class UserAddProductModule { }
