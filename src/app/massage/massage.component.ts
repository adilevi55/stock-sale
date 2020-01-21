import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
})
export class MassageComponent implements OnInit {
  massage: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { error: string },
    private matDialog: MatDialog
  ) {}
  ngOnInit() {
    this.massage = this.data.error;
  }
  closeModal() {
    this.matDialog.closeAll();
  }
}
