import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  examen: any[] = [];
  nuevoExamen: any = {};

  constructor(private http:HttpClient){ }

  ngOnInit() {
    this.getExamen();
  }
/* ----------------------------- Llamar Examen ---------------------------- */
  getExamen(){
    this.http.get<any[]>('http://localhost:8080/examen/buscar')
      .subscribe(
        (data) => {
          this.examen = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ----------------------------- Crear Examen ----------------------------- */
crearExamen() {
  this.http.post('http://localhost:8080/examen/guardar', this.nuevoExamen)
    .subscribe(
      () => {
        this.nuevoExamen = {};
        this.getExamen();
      },
      (error) => {
        console.error(error);
      }
    );
}





}
