import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { RegisterModule } from './register/module/register/register.module';
import { CommonModule } from '@angular/common';
import { AngualrMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { ProductFormatModule } from './products/product-format/module/product-format.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [FormsModule, AngualrMaterialModule, ProductFormatModule, CommonModule]
})
export class ShearModule { }
