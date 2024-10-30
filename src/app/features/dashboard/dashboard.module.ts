import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule,
    CommonModule,
    DashboardRoutingModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    SharedModule,
    MatListModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
