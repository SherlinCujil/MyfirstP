import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  // usuario:any;
  // usuarios:any = [];
  usuarioinicio: any = {};
  usuario: any = {};

  constructor(private http: HttpClient) {

    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString !== null) {
      this.usuario = JSON.parse(usuarioString);
    } else {
      location.href = "/tabs/tab1";
    }

  }

  logout() {
    localStorage.clear();
    location.reload();
  }


}
