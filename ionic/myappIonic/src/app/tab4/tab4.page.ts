import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  // usuario: any = {};

  // constructor() {
  //   const usuarioString = localStorage.getItem("usuario");
  //   if (usuarioString !== null) {
  //     this.usuario = JSON.parse(usuarioString);
  //   } else {

  //     location.href = "/tabs/tab1";
  //   }
  // }

  // logout() {
  //   localStorage.removeItem("usuario");
  //   location.href = "/tabs/tab1";
  // }
  estado:any = [];
  reservaciones:any = [];
  nuevoViaje:any = [];
  lugares:any= [];
  usuarioinicio:any ={};
  constructor(private http:HttpClient){
   this.buscarReserva();
   this.buscarEstados();
   this.buscarViajes();
   this.buscarLugares();

   let t = localStorage.getItem("usuario");
      if(t){
        this.usuarioinicio = JSON.parse(t);
  
   }
   this.buscarPorcorreo();
   

}
buscarReserva(){
 this.servicioBuscarReservas().subscribe(
   (a:any)=>this.reservaciones = a
 )

} 
servicioBuscarReservas():Observable<any>{
   return this.http.get("http://localhost:8080/reservacion/buscar");
 }
 buscarEstados(){
  this.servicioBuscarEstados().subscribe(
    (e:any)=>this.estado = e
  )

 } 
 servicioBuscarEstados():Observable<any>{
    return this.http.get("http://localhost:8080/estado/buscar");
  }

  buscarViajes(){
    this.servicioBuscarViajes().subscribe(
      (v:any)=>this.nuevoViaje = v
    )
  
   } 
   servicioBuscarViajes():Observable<any>{
      return this.http.get("http://localhost:8080/viaje/buscar");
    }

    buscarLugares(){
      this.servicioBuscarLugares().subscribe(
     (e:any)=>this.lugares = e
     
      )
     
     }
     
     servicioBuscarLugares():Observable<any>{
       return this.http.get("http://localhost:8080/lugar/buscar");
     
     }
     buscarPorcorreo(){
      this.serviciobuscarPorcorreo().subscribe(
        (r:any)=>this.reservaciones = r
      )
     }
     serviciobuscarPorcorreo():Observable<any>{
      return this.http.get(`http://localhost:8080/reservacion/buscar/${this.usuarioinicio.correo}`);
    }
}




