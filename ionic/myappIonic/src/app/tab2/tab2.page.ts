import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loading: boolean = false;

  usuario: any = {};
  anuncios: any = [];

  constructor(private http: HttpClient) {
    this.getAnuncios();

    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString !== null) {
      this.usuario = JSON.parse(usuarioString);
    } else {
      location.href = "/tabs/tab1";
    }

  }

  // buscarAnuncios() {
  //   this.loading = true;
  //   this.buscarAnunciosServicio().subscribe(
  //     (response: any) => this.llenarAnuncios(response)
  //   );

  // }

  // buscarAnunciosServicio() {
  //   var httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.http.get<any>("http://localhost:8080/anuncio/buscar", this.anuncios);
  // }

  // llenarAnuncios(anuncios: any) {
  //   this.anuncios = anuncios;
  //   this.loading = false;
  // }

  logout() {
    localStorage.removeItem("usuario");
    location.href = "/tabs/tab1";
  }

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



}


