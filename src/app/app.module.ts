import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './components/loging/loging.component';
import { RegisterModule } from './register/module/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShearModule } from './shear.modul';
import { ProductsDashboardModule } from './products-dashboard/module/products-dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    LogingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShearModule,
    ProductsDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
