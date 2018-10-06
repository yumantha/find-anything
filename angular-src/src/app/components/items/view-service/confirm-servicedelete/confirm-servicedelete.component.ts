import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {ItemService} from "../../../../services/items/item.service";

@Component({
  selector: 'app-confirm-servicedelete',
  templateUrl: './confirm-servicedelete.component.html',
  styleUrls: ['./confirm-servicedelete.component.css']
})
export class ConfirmServicedeleteDialog implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmServicedeleteDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
  }

  onDialogConfirm() {
    this.itemService.deleteService(this.data.serviceId)
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
