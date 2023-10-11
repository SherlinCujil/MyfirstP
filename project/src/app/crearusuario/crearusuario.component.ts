import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent {
  texto: string = '';
  usuarios: any = [];
  usuario: any = {};

  user: any[] = [];
  nuevoUser: any = {};

  telefonos: any[] = [];

  constructor(private http: HttpClient) {
    this.buscarUsuarios();
  }

  eliminar(u: any) {
    this.eliminarUsuario(u).subscribe(
      (u: any) => this.actualizar(u)
    )
  }
  eliminarUsuario(u: any): Observable<any> {
    return this.http.delete<any>("http://localhost:8080/usuario/eliminar/" + u);
  }
  modificar(u: any) {
    this.nuevoUser = u;
  }

  actualizar(u: any) {
    this.buscarUsuarios();
    this.usuario = {};
  }

  buscarUsuarios() {
    this.servicioBuscarUsuarios().subscribe(
      (us: any) => this.usuarios = us
    )
  }

  servicioBuscarUsuarios(): Observable<any> {
    return this.http.get("http://localhost:8080/usuario/buscar");
  }

  limpiarFormulario() {
    this.nuevoUser = {
      correo: '',
      password: '',
      nombre: '',
      apellido: '',
      telefono: '',
    };
  }

  /* ----------------------------- Llamar Usuario ---------------------------- */
  getTelefono() {
    this.http.get<any[]>('http://localhost:8080/telefono/buscar')
      .subscribe(
        (data) => {
          this.telefonos = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  /* ----------------------------- Llamar Usuario ---------------------------- */
  getUsuarios() {
    this.http.get<any[]>('http://localhost:8080/usuario/buscar')
      .subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  /* ---------------------------- Elimianr Usuario --------------------------- */
  deleteUsuario(usuario: number) {
    this.http.delete(`http://localhost:8080/usuario/eliminar/${usuario}`)
      .subscribe(
        () => {
          this.getUsuarios();
          this.buscarUsuarios();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  /* ----------------------------- Crear Usuario ----------------------------- */
  crearUsuario() {
    this.http.post('http://localhost:8080/usuario/guardar', this.nuevoUser)
      .subscribe(
        () => {
          this.nuevoUser = {};
          this.getUsuarios();
        },
        (error) => {
          console.error(error);
        }
      );
  }



}
