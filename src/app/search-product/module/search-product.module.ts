import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShearModule } from 'src/app/shear.modul';
import { SearchProductComponent } from '../component/search-product.component';



@NgModule({
  declarations: [SearchProductComponent],
  imports: [
    CommonModule,
    ShearModule
  ],
  exports: [
    SearchProductComponent
  ]
})
export class SearchProductModule { }
