import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatDividerModule,
  MatDialogModule
} from "@angular/material";


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule
  ]
})

export class MaterialModule {

}
