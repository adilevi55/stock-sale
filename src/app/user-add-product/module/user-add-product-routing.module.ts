import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddProductComponent } from '../component/user-add-product.component';


const routes: Routes = [
  {path: '', component: UserAddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAddProductRoutingModule { }
