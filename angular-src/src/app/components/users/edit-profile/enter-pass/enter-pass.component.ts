import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {AuthService} from "../../../../services/authenticate/auth.service";

@Component({
  selector: 'app-enter-pass',
  templateUrl: './enter-pass.component.html',
  styleUrls: ['./enter-pass.component.css']
})
export class EnterPassDialog implements OnInit {
  hide: Boolean = true;
  password: String;

  constructor(
    private dialogRef: MatDialogRef<EnterPassDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  onDialogOk() {
    const user = {
      user_id: localStorage.getItem('user_id'),
      password: this.password,
      userType: localStorage.getItem('user_type')
    };

    if (user.password) {
      this.authService.comparePasswords(user)
        .subscribe(data => {
          this.dialogRef.close(data);
        });
    } else {
      this.dialogRef.close({
        success: false,
        msg: 'Please enter your current password'
      });
    }
  }

  onDialogCancel() {
    this.dialogRef.close({
      success: false
    })
  }
}
