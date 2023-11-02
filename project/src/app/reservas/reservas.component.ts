import { Component } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  texto: string = '';
 
  reservas:any = [];
  estado:any= [];
  reserva:any = {};
 
  constructor(private http:HttpClient){
    this.buscarReservas();
    this.buscarEstados();
    }

buscarReservas(){
  this.servicioBuscarReservas().subscribe(
    (us:any) => this.reservas = us
  )
}

servicioBuscarReservas():Observable<any>{
  return this.http.get("http://localhost:8080/reservacion/buscar");
}

limpiarFormulario(){
  this.texto = '';
}

buscarEstados(){
  this.servicioBuscarEstados().subscribe(
    (us:any) => this.estado = us
  )
}

servicioBuscarEstados():Observable<any>{
  return this.http.get("http://localhost:8080/estado/buscar");
}

  /* ----------------------------- Llamar reservas ----------------------------
  getReservas(){
    this.http.get<any[]>('http://localhost:8080/reservacion/buscar')
      .subscribe(
        (data) => {
          this.reservas = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }*/

}