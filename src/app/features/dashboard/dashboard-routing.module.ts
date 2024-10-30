import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import ('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'cursos',
    loadChildren: () => import ('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
