import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LogingComponent } from './loging/loging.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LogingComponent},
  {path: 'register', loadChildren: () => import('./register/module/register/register.module')
  .then(m => m.RegisterModule)},
  {path: 'products', loadChildren: () => import('./products/module/products.module')
  .then(m => m.ProductsModule), canActivate: [AuthGuardService]
  },
  {path: 'user/products', loadChildren: () => import('./user-products/module/user-products.module')
  .then(m => m.UserProductsModule), canActivate: [AuthGuardService]
  },
  {path: 'user/add-product', loadChildren: () => import('./user-add-product/module/user-add-product.module')
  .then(m => m.UserAddProductModule), canActivate: [AuthGuardService]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
