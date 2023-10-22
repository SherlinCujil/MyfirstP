import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { ExamenComponent } from './examen/examen.component';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { ViajesComponent } from './viajes/viajes.component';
import { LugaresComponent } from './lugares/lugares.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { ReservasComponent } from './reservas/reservas.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    AnuncioComponent,
    ExamenComponent,
    CrearusuarioComponent,
    ViajesComponent,
    LugaresComponent,
    MiperfilComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
