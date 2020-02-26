import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProductComponent } from '../component/search-product.component';
import { AngualrMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchProductComponent],
  imports: [
    CommonModule,
    AngualrMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchProductComponent
  ]
})
export class SearchProductModule { }
