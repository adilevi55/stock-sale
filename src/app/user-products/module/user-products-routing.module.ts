import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProductsComponent } from '../component/user-products.component';

const routes: Routes = [
    {path: '', component: UserProductsComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class UserProductsRoutingModule { }
