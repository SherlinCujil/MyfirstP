import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  private apiUrl = 'http://localhost:8080/anuncio/guardar';

  constructor(private http: HttpClient) { }

  crearAnuncio(anuncio: any): Observable<any> {
    return this.http.post(this.apiUrl, anuncio);
  }
}
