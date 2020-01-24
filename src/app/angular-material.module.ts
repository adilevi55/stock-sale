import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  exports: [
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDialogModule,
      MatRadioModule,
      MatTabsModule,
      MatSelectModule
    ]
})
export class AngualrMaterialModule { }
