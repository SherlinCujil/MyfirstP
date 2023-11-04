import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: any = {};

  constructor(private http: HttpClient) { }

  login() {
    let validarFormulario: any = document.getElementById("loginForm");
    if (validarFormulario.reportValidity()) {
      this.servicioLogin().subscribe(
        (u: any) => this.darBienvenida(u)
      )
    }
  }

  servicioLogin() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (this.usuario.correo === "admin" && this.usuario.password === "admin") {
      return this.http.post("http://localhost:8080/administrador/login", this.usuario, httpOptions);

    } else {
      return this.http.post("http://localhost:8080/usuario/login", this.usuario, httpOptions);
    }
  }

  darBienvenida(usuario: any) {
    // if (!usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario))
      if (usuario === "admin") {
        location.href = "/bienvenida";
      } else {
        location.href = "/bienvenida";
      }
    // } else {
    //   alert("Usuario o password invalido.")
    // }
  }
}
