import { Component } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  texto: string = '';
  lugar:any = [];
  usuario:any = {};
  estados:any = [];
  lugares:any = [];

  idlugar: any[] = [];
  nuevoLugar: any = {};

  constructor(private http:HttpClient){
    this.buscarLugares();
  }

  eliminar(u:any){
    this.eliminarLugares(u).subscribe(
      (u:any)=>this.actualizar(u)
    )
  }
  eliminarLugares(u:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/usuario/eliminar/"+u);
  }
  modificar(u:any){
    this.lugar = u;
  }

  actualizar(u:any){
    this.buscarLugares();
    this.lugar = {};
  }  
  
  buscarLugares(){
    this.servicioBuscarLugares().subscribe(
      (us:any) => this.lugares = us
    )
  }

  servicioBuscarLugares():Observable<any>{
    return this.http.get("http://localhost:8080/lugar/buscar");
  }

  limpiarFormulario(){
    this.texto = '';
  }

  /* ----------------------------- Llamar Lugares ---------------------------- */
  getLugar(){
    this.http.get<any[]>('http://localhost:8080/lugar/buscar')
      .subscribe(
        (data) => {
          this.lugar = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ---------------------------- Eliminar Lugar --------------------------- */
deleteLugar(lugar: number) {
    this.http.delete(`http://localhost:8080/lugar/eliminar/${lugar}`)
      .subscribe(
        () => {
          this.getLugar();
          this.buscarLugares();
        },
        (error) => {
          console.error(error);
        }
      );
  }

/* ----------------------------- Crear Lugar ----------------------------- */
crearLugar() {
  this.http.post('http://localhost:8080/lugar/guardar', this.nuevoLugar)
    .subscribe(
      () => {
        this.nuevoLugar = {};
        this.getLugar();
      },
      (error) => {
        console.error(error);
      }
    );
}


}
