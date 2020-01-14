import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from '../component/product-dashboard/product-dashboard.component';
import { AuthGuardService } from 'src/app/services/auth-guard';
import { ProductDashboardAllProductsComponent } from '../products-dashboard-all-products/component/product-dashboard-all-products/product-dashboard-all-products.component';


const routes: Routes = [
    {path: '', component: ProductDashboardComponent,
    canActivate: [AuthGuardService]
    ,   children: [
         {path: '', redirectTo: 'all-products', pathMatch: 'full'},
             {path: 'all-products', component: ProductDashboardAllProductsComponent},
         ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsDashboardRoutingModule {}
