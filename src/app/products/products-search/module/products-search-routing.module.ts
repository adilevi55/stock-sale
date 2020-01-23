import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSearchComponent } from '../component/products-search.component';

const route: Routes = [
  {path: '', component: ProductsSearchComponent}
]


@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ProductsSearchRoutingModule { }