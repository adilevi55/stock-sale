import { NgModule } from '@angular/core';
import { ShearModule } from 'src/app/shear.modul';
import { UserAddProductPhoneComponent } from '../component/user-add-product-phone.component';



@NgModule({
  declarations: [UserAddProductPhoneComponent],
  imports: [
    ShearModule
  ],
  exports: [UserAddProductPhoneComponent]
})
export class UserAddProductPhoneModule { }
