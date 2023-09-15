import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  mensaje : string ="";

 /* saludar(){
 console.log("Hola mundo en consola");
 alert("Hola mundo en ventana");
 this.mensaje = "Hola mundo en pagina";
  }
  */
}
