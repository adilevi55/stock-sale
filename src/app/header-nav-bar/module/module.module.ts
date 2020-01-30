import { NgModule } from '@angular/core';
import { HeaderNavBarComponent } from '../component/header-nav-bar.component';
import { ShearModule } from 'src/app/shear.modul';
import { RouterModule } from '@angular/router';
import { ProductsNavDeskTopModule } from 'src/app/products/products-nav-desk-top/module/products-nav-desk-top.module';
import { ProductsNavPhoneModule } from 'src/app/products/products-nav-phone/module/products-nav-phone.module';



@NgModule({
  declarations: [HeaderNavBarComponent],
  imports: [
    ShearModule,
    RouterModule,
    ProductsNavDeskTopModule,
    ProductsNavPhoneModule

  ],
  exports: [HeaderNavBarComponent]
})
export class HeaderNavBarModule { }
