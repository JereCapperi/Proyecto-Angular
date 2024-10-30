import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UserfullnamePipe } from './pipes/userfullname.pipe';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    UserfullnamePipe,
    ResaltadoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    UserfullnamePipe,
    ResaltadoDirective,
    MatListModule,
  ],
})
export class SharedModule { }
