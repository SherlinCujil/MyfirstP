import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario:any = {};

  constructor(private http:HttpClient){ }

  login(){
    let validarFormulario:any = document.getElementById("loginForm");
    if(validarFormulario.reportValidity()){
      this.servicioLogin().subscribe(
        (u:any)=> this.darBienvenida(u)
      )
    }
  }


  darBienvenida(usuario:any){
    if(usuario){
      localStorage.setItem("usuario", JSON.stringify(usuario))
      location.href="/bienvenida";
    }
    else{
      alert("Usuario o password invalido.")
    }
  }
  servicioLogin(){
    let httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
  }

  return this.http.post(
    "http://localhost:8080/usuario/login",
    this.usuario,
    httpOptions);
  }
}
//correo@correo.com