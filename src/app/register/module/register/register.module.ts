import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../component/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ShearModule } from 'src/app/shear.modul';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ShearModule
  ],
  exports: [RegisterRoutingModule, RegisterComponent]
})
export class RegisterModule { }
