import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { RegisterModule } from './register/module/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShearModule } from './shear.modul';
import { MassageComponent } from './massage/massage.component';
import { HttpErrorInteceptor } from './error.inteceptor';
import { ProductsModule } from './products/module/products.module';
import { RouterModule } from '@angular/router';
import { HeaderNavBarModule } from './header-nav-bar/module/module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddProductModule } from './user-product/user-add-product/module/user-add-product.module';
import { DeleteProductModule } from './user-product/delete-product/module/delete-product.module';
import { ProductUpdateModule } from './user-product/product-update/module/product-update.module';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    MassageComponent,
    PageNotFoundComponent
  ],
  entryComponents: [MassageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShearModule,
    ProductsModule,
    RouterModule,
    HeaderNavBarModule,
    UserAddProductModule,
    DeleteProductModule,
    ProductUpdateModule,
    OverlayModule,
    HeaderNavBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInteceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
