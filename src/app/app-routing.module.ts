import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LogingComponent } from './components/loging/loging.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LogingComponent},
  {path: 'register', loadChildren: () => import('./register/module/register/register.module')
  .then(m => m.RegisterModule)},
  {path: 'products-dashboard', loadChildren: () => import('./products-dashboard/module/products-dashboard.module')
  .then(m => m.ProductsDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
