import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteProductComponent } from '../component/delete-product.component';


const routes: Routes = [
  {path: '', component: DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteProductRoutingModule { }
