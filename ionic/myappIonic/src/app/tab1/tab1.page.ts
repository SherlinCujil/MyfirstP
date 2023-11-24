import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  iniciarSesionn: boolean=false;
  usuario:any = {};
  errorlnicio: boolean = false;
  crearUsuario: boolean = false;

  constructor(private http: HttpClient) {


    let t = localStorage.getItem("usuario");
    if(t){
      this.iniciarSesionn = true;
 }
 else{
  this.iniciarSesionn = false;
 }

   }

  /* ---------------------------------- Login --------------------------------- */
  ingresar() {
    if (this.usuario.correo && this.usuario.password
      && this.usuario.correo!= "" && this.usuario.password !="") {
      this.servicioLogin().subscribe(
        data => this.iniciarSesion(data))
    } else {
      alert("Ingrese datos Correctos")
    }
  }

  iniciarSesion(usuario: any) {
    if (usuario) {
     // localStorage.setItem("usuario", JSON.stringify(usuario))
      //location.href = "/tabs/tab2";

   //} else {
      //this.errorlnicio = true;
    //}

    let t = JSON.stringify(usuario);
    localStorage.setItem("usuario", t);
    location.href = "/tabs/tab2";
        this.usuario ={};
        this.iniciarSesionn = true;
      }
      else {
        alert("Usuario o password invalidos.")
      }

  }

  servicioLogin() {
    var httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/usuario/login", 
    this.usuario, httpOptions);

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
