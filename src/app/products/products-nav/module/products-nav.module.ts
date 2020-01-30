import { NgModule } from '@angular/core';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsNavComponent } from '../component/products-nav.component';
import { RouterModule } from '@angular/router';
import { ProductsNavDeskTopModule } from '../../products-nav-desk-top/module/products-nav-desk-top.module';
import { ProductsNavPhoneModule } from '../../products-nav-phone/module/products-nav-phone.module';
import { AngualrMaterialModule } from 'src/app/angular-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProductsNavComponent],
    imports: [
    AngualrMaterialModule,
    RouterModule,
    CommonModule,
    ProductsNavDeskTopModule,
    ProductsNavPhoneModule

],
    exports: [ProductsNavComponent]
})
export class ProductsNavModule { }
