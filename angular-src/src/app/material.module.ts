import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatToolbarModule, MatInputModule, MatCardModule
} from "@angular/material";


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})

export class MaterialModule {

}
