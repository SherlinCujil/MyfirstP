import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  viajes:any = [];
  nombre:any = [];  
  valor:any = []; 
  nuevaReservacion:any = {};
  VerReserva:boolean = false 
  Usuarioinicio:any ={};
  constructor(private http:HttpClient){
    this.buscarViajes();
    this.buscarEstados();
    this.buscarLugares();

    let t = localStorage.getItem("usuario");
    if(t) {
      this.Usuarioinicio = JSON.parse(t);
    }
  }
  buscarViajes(){
    this.servicioBuscarViajes().subscribe(
   (a:any)=>this.viajes = a
   
    )
      }
   
   servicioBuscarViajes():Observable<any>{
     return this.http.get("http://localhost:8080/viaje/buscar");
   
   }

   buscarLugares(){
    this.servicioBuscarLugares().subscribe(
      (a:any)=>this.nombre = a
    )
  
   } 
   servicioBuscarLugares():Observable<any>{
      return this.http.get("http://localhost:8080/lugar/buscar");
    }

    buscarEstados(){
      this.servicioBuscarEstados().subscribe(
        (e:any)=>this.valor = e
      )
    
     } 
     servicioBuscarEstados():Observable<any>{
        return this.http.get("http://localhost:8080/estado/buscar");
      }

      reservar(viaje:any){
        alert("Ingrese cantidad de pasajeros: "+viaje.cupo);
        this.VerReserva = true;
      }
      aceptarReservar(viaje:any){
        this.servicioSaveReservacion(viaje.idviaje, viaje.idestado).subscribe(

        )
        alert("reserva guardada exitosamente");
        this.VerReserva = false;
      
      }
      servicioSaveReservacion(idviaje: string, idestado:string){
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
        {
          this.nuevaReservacion.correo = this.Usuarioinicio.correo
          this.nuevaReservacion.idestado = idestado
          this.nuevaReservacion.idviaje = idviaje

          console.log(this.nuevaReservacion)

          return this.http.post(
            "http://localhost:8080/reservacion/guardar",
            this.nuevaReservacion,
            httpOptions)
        }
      }
      
      cancelarReserva(){
      
        this.VerReserva = false;
      }
   
}

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

// }

