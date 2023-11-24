import { Component } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";



@Component({
  selector: 'app-tiposanuncios',
  templateUrl: './tiposanuncios.component.html',
  styleUrls: ['./tiposanuncios.component.css']
})
export class TiposanunciosComponent {


texto: string = '';
  tipo:any = [];
 tipos:any = [];

  idtipo_anuncios: any[] = [];
  tiposs: any = {};

  constructor(private http:HttpClient){
    this.buscarTipos();
  }

  eliminar(u:any){
    this.eliminartipos(u).subscribe(
      (u:any)=>this.actualizar(u)
    )
  }
  eliminartipos(u:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/tipos/eliminar/"+u);
  }
  modificar(u:any){
    this.tiposs = u;
  }

  actualizar(u:any){
    this.buscarTipos();
    this.tiposs = {};
  }  
  
  buscarTipos(){
    this.servicioBuscarTipos().subscribe(
      (us:any) => this.tipo = us
    )
  }

  servicioBuscarTipos():Observable<any>{
    return this.http.get("http://localhost:8080/tipos/buscar");
  }

  limpiarFormulario(){
    this.texto = '';
  }

  /* ----------------------------- Llamar TIPOS ---------------------------- */
  getTipo(){
    this.http.get<any[]>('http://localhost:8080/tipos/buscar')
      .subscribe(
        (data) => {
          this.tipos = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ---------------------------- Eliminar tipos --------------------------- */
deleteTipo(tipo: number) {
    this.http.delete(`http://localhost:8080/tipos/eliminar/${tipo}`)
      .subscribe(
        () => {
          this.getTipo();
          this.buscarTipos();
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ----------------------------- Crear TIPOS ----------------------------- */
crearTipo() {
  this.http.post('http://localhost:8080/tipos/guardar', this.tiposs)
    .subscribe(
      () => {
        this.tiposs = {};
        this.getTipo();
      },
      (error) => {
        console.error(error);
      }
    );
}


}

