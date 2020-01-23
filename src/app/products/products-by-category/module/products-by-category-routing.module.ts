import { NgModule } from '@angular/core';
import { ProductsByCategoryComponent } from '../component/products-by-category.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path: '', component: ProductsByCategoryComponent}
]


@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ProductsByCategoryRoutingModule { }
