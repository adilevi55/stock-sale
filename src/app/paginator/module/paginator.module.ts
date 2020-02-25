import { NgModule } from '@angular/core';
import { PaginatorComponent } from '../paginator.component';
import { AngualrMaterialModule } from 'src/app/angular-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
      AngualrMaterialModule,
      CommonModule
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }
