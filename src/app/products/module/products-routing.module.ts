import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from '../component/products.component';
import { ProductsAllProductsComponent } from '../products-all-products/component/products-all-products.component';
import { ProductsByCategoryComponent } from '../products-by-category/component/products-by-category.component';
import { ProductsSearchComponent } from '../products-search/component/products-search.component';

const routes: Routes = [
    {path: '', component: ProductsComponent, children: [
        {path: '', component: ProductsComponent},
        {path: 'all-products', component: ProductsAllProductsComponent},
        {path: 'category/:categoryName', component: ProductsByCategoryComponent},
        {path: 'search/:fild/:searchVal', component: ProductsSearchComponent},
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
