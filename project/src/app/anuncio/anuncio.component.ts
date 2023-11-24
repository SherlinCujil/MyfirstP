import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {

  anuncios: any[] = [];
  nuevoAnuncio: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAnuncios();
  }

  /* ----------------------------- Llamar Anuncios ---------------------------- */
  getAnuncios() {
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
          this.getAnuncios();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  /* --------------------------------- Imagen --------------------------------- */
  crearAnuncioImagen() {
    const fileInput = document.getElementById('descripcion') as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.nuevoAnuncio.imagen = reader.result as string;

        // Ahora puedes enviar el formulario con la imagen en formato base64
        this.http.post('http://localhost:8080/anuncio/guardar', this.nuevoAnuncio)
          .subscribe(
            () => {
              this.nuevoAnuncio = {};
              this.getAnuncios();
            },
            (error) => {
              console.error(error);
            }
          );
      };

      reader.readAsDataURL(file);
    } else {
      console.error("No se ha seleccionado ningún archivo");
    }
  }

  /* -------------------------------------------------------------------------- */
  onFileSelected(event: any) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.nuevoAnuncio.imagen = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}