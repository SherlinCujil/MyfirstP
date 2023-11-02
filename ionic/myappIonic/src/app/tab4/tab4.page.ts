import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
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

