import { Component } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent {
  texto: string = '';
  viaje:any = [];
  viajes:any = [];
  viajess:any = {};

  idviaje: any[] = [];
  nuevoViaje: any = {};


  constructor(private http:HttpClient){
    this.buscarViajes();
  }

  eliminar(u:any){
    this.eliminarViajes(u).subscribe(
      (u:any)=>this.actualizar(u)
    )
  }
  eliminarViajes(u:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/viaje/eliminar/"+u);
  }
  modificar(u:any){
    this.nuevoViaje = u;
  }

  actualizar(u:any){
    this.buscarViajes();
    this.viajess = {};
  }  
  
  buscarViajes(){
    this.servicioBuscarViajes().subscribe(
      (us:any) => this.viajes = us
    )
  }

  servicioBuscarViajes():Observable<any>{
    return this.http.get("http://localhost:8080/viaje/buscar");
  }

  limpiarFormulario(){
    this.texto = '';
  }

/* ----------------------------- Llamar Viaje ---------------------------- */
  getViaje(){
    this.http.get<any[]>('http://localhost:8080/viaje/buscar')
      .subscribe(
        (data) => {
          this.viaje = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ---------------------------- Elimianr Usuario --------------------------- */
deleteViaje(viaje: number) {
    this.http.delete(`http://localhost:8080/viaje/eliminar/${viaje}`)
      .subscribe(
        () => {
          this.getViaje();
          this.buscarViajes();
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ----------------------------- Crear Viaje ----------------------------- */
crearViaje() {
  this.http.post('http://localhost:8080/viaje/guardar', this.nuevoViaje)
    .subscribe(
      () => {
        this.nuevoViaje = {};
        this.getViaje();
      },
      (error) => {
        console.error(error); 
      }
    );
}



}
