import { NgModule } from '@angular/core';
import { UserAddProductRoutingModule } from './user-add-product-routing.module';
import { UserAddProductComponent } from '../component/user-add-product.component';
import { ShearModule } from 'src/app/shear.modul';
import { UserAddProductDesktopModule } from '../user-add-product-desktop/module/user-add-product-desktop.module';
import { UserAddProductPhoneModule } from '../user-add-product-phone/module/user-add-product-phone.module';


@NgModule({
  declarations: [UserAddProductComponent],
  imports: [
    ShearModule,
    UserAddProductRoutingModule,
    UserAddProductDesktopModule,
    UserAddProductPhoneModule
  ],
  exports: [
    UserAddProductComponent
  ]
})
export class UserAddProductModule { }
