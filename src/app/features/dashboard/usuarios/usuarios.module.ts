import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component'

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import { UsuariosDialogComponent } from './usuarios-dialog/usuarios-dialog.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosDialogComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [
    UsuariosComponent,
  ],
})
export class UsuariosModule { }
