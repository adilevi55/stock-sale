import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './components/loging/loging.component';
import { RegisterModule } from './register/module/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    LogingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
