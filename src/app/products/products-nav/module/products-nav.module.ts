import { NgModule } from '@angular/core';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsNavComponent } from '../component/products-nav.component';
import { ProductsNavRoutingModule } from './products-nav-routing.module copy';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ProductsNavComponent],
    imports: [
    ShearModule,
    RouterModule

],
    exports: [ProductsNavComponent]
})
export class ProductsNavModule { }
