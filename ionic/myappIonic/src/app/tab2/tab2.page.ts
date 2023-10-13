import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loading:boolean =false;

  usuario:any = {};
  anuncio:any = [];

  constructor(private http:HttpClient ) {
      this.buscarAnuncios();

      {
        const usuarioString = localStorage.getItem("usuario");
        if (usuarioString !== null) {
            this.usuario = JSON.parse(usuarioString);
        } else {
            location.href = "/tabs/tab1";
        }
      
      }



  }

buscarAnuncios(){
    this.loading =true;
    this.buscarAnunciosServicio().subscribe(
      (response:any)=>this.llenarAnuncios(response)
    );

  }  

buscarAnunciosServicio(): Observable<any> {
  return this.http.get<any>("http>//localhost:8080/anuncio/buscar").pipe(
    catchError(e=>"error")
  )
}
llenarAnuncios(anuncio:any){
this.anuncio = anuncio;
this.loading =false;
}


  
    logout(){
    localStorage.removeItem("usuario");
    location.href = "/tabs/tab1";
  }



}


