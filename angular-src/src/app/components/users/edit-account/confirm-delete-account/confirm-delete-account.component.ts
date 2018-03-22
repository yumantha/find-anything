import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {AuthService} from "../../../../services/authenticate/auth.service";

@Component({
  selector: 'app-confirm-delete-account',
  templateUrl: './confirm-delete-account.component.html',
  styleUrls: ['./confirm-delete-account.component.css']
})
export class ConfirmDeleteAccountDialog implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteAccountDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onDialogConfirm() {
    this.authService.deleteUser(this.data.userId, this.data.userType)
      .subscribe(data => {
        this.dialogRef.close(data);
      });
  }

  onDialogCancel() {
    this.dialogRef.close({
      success: false
    })
  }

}
