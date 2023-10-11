import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuario: any = {};

  constructor() {
    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString !== null) {
      this.usuario = JSON.parse(usuarioString);
    } else {
      location.href = "/tabs/tab1";
    }
  }

  logout() {
    localStorage.removeItem("usuario");
    location.href = "/tabs/tab1";
  }
}

