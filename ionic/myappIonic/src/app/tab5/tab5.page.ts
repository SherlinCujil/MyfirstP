import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

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

  logout() {
    localStorage.removeItem("usuario");
    location.href = "/tabs/tab1";
  }
  
}
