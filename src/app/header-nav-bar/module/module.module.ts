import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavBarComponent } from '../component/header-nav-bar.component';
import { ShearModule } from 'src/app/shear.modul';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderNavBarComponent],
  imports: [
    ShearModule,
    RouterModule
  ],
  exports: [HeaderNavBarComponent]
})
export class HeaderNavBarModule { }
