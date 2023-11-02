import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ViajesComponent } from './viajes/viajes.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [

{ path:'',component:LoginComponent},
{ path:'bienvenida',component:BienvenidaComponent},
{ path:'anuncio',component:AnuncioComponent},
{ path:'crearusuario',component:CrearusuarioComponent},
{ path:'lugares',component:LugaresComponent},
{ path:'viajes',component:ViajesComponent},
{ path:'miperfil',component:MiperfilComponent},
{path: 'reservas',component:ReservasComponent},
{ path:'**',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
