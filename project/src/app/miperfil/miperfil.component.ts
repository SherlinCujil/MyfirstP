import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {
  usuario:any;
  usuarios:any = [];

  constructor(private http:HttpClient){
    this.buscarUsuarios();
    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString !== null) {
        this.usuario = JSON.parse(usuarioString);
    } else {
        location.href = "#";
    }
  }

  buscarUsuarios(){
    this.servicioBuscarUsuarios().subscribe(
      (us:any) => this.usuarios = us
    )
  }

  servicioBuscarUsuarios():Observable<any>{
    return this.http.get("http://localhost:8080/administrador/buscar");
  }






}
