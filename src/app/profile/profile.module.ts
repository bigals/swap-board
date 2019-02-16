import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [ViewProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule {}
