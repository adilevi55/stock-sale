import { NgModule } from '@angular/core';
import { ShearModule } from 'src/app/shear.modul';
import { UserAddProductDesktopComponent } from '../component/user-add-product-desktop.component';



@NgModule({
  declarations: [UserAddProductDesktopComponent],
  imports: [
    ShearModule
  ],
  exports: [UserAddProductDesktopComponent]
})
export class UserAddProductDesktopModule { }
