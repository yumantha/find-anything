import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-enter-pass',
  templateUrl: './enter-pass.component.html',
  styleUrls: ['./enter-pass.component.css']
})
export class EnterPassDialog implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EnterPassDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
  }

  onDialogOk() {
    this.dialogRef.close('Confirmed');
  }

  onDialogCancel() {
    this.dialogRef.close('Cancelled')
  }
}
