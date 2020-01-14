import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from '../component/product-dashboard/product-dashboard.component';
import { AuthGuardService } from 'src/app/services/auth-guard';


const routes: Routes = [
    {path: '', component: ProductDashboardComponent,
    canActivate: [AuthGuardService]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsDashboardRoutingModule {}
