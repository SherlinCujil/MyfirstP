import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  mostrarComponente: Boolean = false;
  usuarios: any = [];
  usuario: any = {};
  administrador: any = {};
  estados: any = [];
  reservas: any = [];
  
  constructor(private http: HttpClient) {
    /* -------------------------- Usuario inicio sesion ------------------------- */
    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString !== null) {
      this.usuario = JSON.parse(usuarioString);
    } else {
      location.href = "#";
    }

  }

  buscarUsuarios() {
    this.servicioBuscarUsuarios().subscribe(
      (us: any) => this.usuarios = us
    )
  }

  servicioBuscarUsuarios(): Observable<any> {
    return this.http.get("http://localhost:8080/usuario/buscar");
  }


  crearUsuario() {

    let formularioValido: any = document.getElementById("usuarioForm");
    if (formularioValido.reportValidity()) {
      this.usuario.fechaCreacion = new Date();
      this.servicioGuardar().subscribe(
        (u: any) => this.actualizar(u)
      )
    }
  }

  modificar(u: any) {
    this.usuario = u;
  }

  actualizar(u: any) {
    this.buscarUsuarios();
    this.usuario = {};
  }

  servicioGuardar() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(
      "http://localhost:8080/usuario/guardar",
      this.usuario,
      httpOptions);
  }


  buscarEstados() {
    this.servicioBuscarEstados().subscribe(
      (u: any) => this.estados = u
    )
  }
  servicioBuscarEstados(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/estado/buscar/tabla/usuario/campo/estado");
  }

  eliminar(u: any) {
    this.eliminarUsuario(u).subscribe(
      (u: any) => this.actualizar(u)
    )
  }
  eliminarUsuario(u: any): Observable<any> {
    return this.http.delete<any>("http://localhost:8080/usuario/eliminar/" + u.idusuario);
  }

  EliminarFormulario() {
    this.usuario = {};
  }

  // mycomponente(){
  //   this.mostrarComponente = this.mostrarComponente;
  // }

  CerrarSesion() {
    localStorage.removeItem("usuario");
    location.href = "/";
  }


}
