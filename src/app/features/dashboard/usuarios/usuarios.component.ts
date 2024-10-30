import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogComponent } from './usuarios-dialog/usuarios-dialog.component';
import { Usuarios } from './models';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  dataSource: Usuarios[] = [];

  isLoading = false; 

  constructor(private matDialog: MatDialog, private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.isLoading = true;
    this.usuariosService.getUsuarios().subscribe({
      next: (value) => {
        this.dataSource = value;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onDelete(id: string) {
    if (confirm('¿Estás seguro?')) {
      // this.dataSource = this.dataSource.filter((usuario) => usuario.id !== id);
      this.isLoading = true;
      this.usuariosService.removeUsuariosById(id).subscribe({
        next: (usuarios) => {
          this.dataSource = usuarios;
        },
        complete: () => {
          this.isLoading = false;
        }
      })
    }


  }

  openModal(editingUser?: Usuarios): void {
    this.matDialog
      .open(UsuariosDialogComponent, {
        data: {
          editingUser
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log('RECIBIMOS:', result);

          if (!!result) {
            if (editingUser) {
              this.handleUpdate(editingUser.id, result);
            } else {
              this.dataSource = [
                ...this.dataSource,
                {
                  ...result,
                }
              ];
            }
          }
        },
      });
  }


  handleUpdate(id: string, update: Usuarios): void {
    this.isLoading = true;
    this.usuariosService.updateUsuarioById(id, update).subscribe({
      next: (usuarios) => {
        this.dataSource = usuarios;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
