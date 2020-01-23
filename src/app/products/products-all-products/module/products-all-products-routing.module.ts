import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAllProductsComponent } from '../component/products-all-products.component';

const route: Routes = [
  {path: '', component: ProductsAllProductsComponent}
]


@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ProductsAllProductsRoutingModule { }