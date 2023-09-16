import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {

  anuncios: any[] = [];
  nuevoAnuncio: any = {};

  constructor(private http:HttpClient){ }

  ngOnInit() {
    this.getAnuncios();
  }
/* ----------------------------- Llamar Anuncios ---------------------------- */
  getAnuncios(){
    this.http.get<any[]>('http://localhost:8080/anuncio/buscar')
      .subscribe(
        (data) => {
          this.anuncios = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ---------------------------- Elimianr anuncios --------------------------- */
deleteAnuncio(idAnuncio: number) {
    this.http.delete(`http://localhost:8080/anuncio/eliminar/${idAnuncio}`)
      .subscribe(
        () => {
          this.getAnuncios();
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ----------------------------- Crear Anuncios ----------------------------- */
crearAnuncio() {
  this.http.post('http://localhost:8080/anuncio/guardar', this.nuevoAnuncio)
    .subscribe(
      () => {
        this.nuevoAnuncio = {};
      },
      (error) => {
        console.error(error);
      }
    );
}




}