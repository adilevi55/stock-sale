import { NgModule } from '@angular/core';
import { ProductsComponent } from '../component/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ShearModule } from 'src/app/shear.modul';
import { ProductsNavModule } from '../products-nav/module/products-nav.module';
import { ProductsAllProductsModule } from '../products-all-products/module/products-all-products.module';
import { ProductsByCategoryModule } from '../products-by-category/module/products-by-category.module';
import { ProductsSearchModule } from '../products-search/module/products-search.module';
import { SearchProductModule } from 'src/app/search-product/module/search-product.module';

@NgModule({
    declarations: [ProductsComponent],
    imports: [
    ProductsRoutingModule,
    ShearModule,
    ProductsAllProductsModule,
    ProductsByCategoryModule,
    ProductsSearchModule,
    SearchProductModule
],
    exports: [ProductsComponent,
             ProductsRoutingModule,
            ]
})
export class ProductsModule { }
