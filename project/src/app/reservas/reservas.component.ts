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
  reserva:any = [];
  reservas:any = [];

  idreserva: any[] = [];

  constructor(private http:HttpClient){
    this.buscarReservas();

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




}