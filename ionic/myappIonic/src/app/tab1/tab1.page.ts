import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuario:any = {};
  errorlnicio: boolean = false;
  crearUsuario: boolean = false;

  constructor(private http: HttpClient) { }

  /* ---------------------------------- Login --------------------------------- */
  ingresar() {
    if (this.usuario.correo && this.usuario.password) {
      this.servicioLogin().subscribe(
        data => this.iniciarSesion(data))
    } else {
      alert("Ingrese datos Correctos")
    }
  }

  iniciarSesion(result: any) {
    if (result) {
      localStorage.setItem("usuario", JSON.stringify(result))
      location.href = "/tabs/tab2";
    } else {
      this.errorlnicio = true;
    }
  }

  servicioLogin() {
    var httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post<any>("http://localhost:8080/usuario/login", this.usuario, httpOptions);
  }

  /* ------------------------------ Crear Cuenta ------------------------------ */

  crearcuenta() {
    this.crearUsuario = !this.crearUsuario;
  }

  crear() {
    if (this.usuario.correo && this.usuario.password && this.usuario.nombre && this.usuario.apellido) {
      this.usuario.rolIdrol = 2;
      this.crearServicio().subscribe(
        data => this.confirmar(data)
      )
    } else {
      alert("Ingrese los datos")
    }
  }

  confirmar(result: any){
    if (result) {
      alert("Creacion exitosa")
      this.usuario = {};
      this.crearcuenta();
    }else {
      alert("Erro al crear usuario");
    }
  }

  crearServicio(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/usuario/guardar", this.usuario, httpOptions);
  }
}
