import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  exports: [
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDialogModule
    ]
})
export class AngualrMaterialModule { }
