import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './components/loging/loging.component';
import { RegisterModule } from './register/module/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShearModule } from './shear.modul';
import { ProductsDashboardModule } from './products-dashboard/module/products-dashboard.module';
import { MassageComponent } from './massage/massage.component';
import { HttpErrorInteceptor } from './error.inteceptor';
@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    MassageComponent
  ],
  entryComponents: [MassageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShearModule,
    ProductsDashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInteceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
