import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/features/dashboard/usuarios/models';
import { Observable, of } from 'rxjs';
import { delay, pipe } from 'rxjs';


let DATABASE: Usuarios[] = [
  {
    id: 'hgs2k', 
    firstname: 'Gonzalo', 
    lastname: 'Fernandez', 
    createdAt: new Date(),
    email: 'gonzafernandez@gmail.com'
  },
  {
    id: 'l3xct', 
    firstname: 'Lionel', 
    lastname: 'Gomez', 
    createdAt: new Date(),
    email: 'lionelgomez@gmail.com'
  },
  {
    id: 'oie56', 
    firstname: 'Esteban', 
    lastname: 'Brown', 
    createdAt: new Date(),
    email: 'estebanquito@gmail.com'
  },
  {
    id: 'hg93s', 
    firstname: 'Sebastian', 
    lastname: 'Boselli', 
    createdAt: new Date(),
    email: 'boselliseba78@gmail.com'
  }
];



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuarios(): Observable<Usuarios[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DATABASE)
        observer.complete();
      }, 2000);
    })
  }

  removeUsuariosById(id: string): Observable<Usuarios[]> {
    DATABASE = DATABASE.filter((usuario) => usuario.id != id);

    return of(DATABASE).pipe(delay(700))
  }


  updateUsuarioById(id: string, update: Partial<Usuarios>){
    DATABASE = DATABASE.map((usuario) =>
      usuario.id === id ? { ...usuario, ...update } : usuario
    );

    return new Observable<Usuarios[]>((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 700);
    })
  }
}
