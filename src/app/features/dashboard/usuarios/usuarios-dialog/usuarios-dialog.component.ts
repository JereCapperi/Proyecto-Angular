import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Usuarios } from '../models';
import { DataSource } from '@angular/cdk/collections';


interface UsuariosDialogData {
  editingUser?: Usuarios;
}





@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styles: ``
})
export class UsuariosDialogComponent {
  userForm: FormGroup;


  constructor(
    private matDialogRef: MatDialogRef<UsuariosDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: UsuariosDialogData
  ) {
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingUser;
  }

  patchFormValue() {
    if (this.data?.editingUser) {
      this.userForm.patchValue(this.data.editingUser);
    }
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.userForm.value,
        id: this.isEditing
          ? this.data!.editingUser!.id
          : generateRandomString(5),
        createdAt: this.isEditing
          ? this.data!.editingUser!.createdAt
          : new Date(),
      });
    }
  }
}