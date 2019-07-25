import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { ItemHeroeComponent } from './components/item-heroe/item-heroe.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';
import { MenuOpcionesComponent } from './components/menu-opciones/menu-opciones.component';
import { HttpClientModule } from "@angular/common/http";
import { ServicioHeroesService } from "./service/servicio-heroes.service";
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaHeroesComponent,
    ItemHeroeComponent,
    DetalleHeroeComponent,
    MenuOpcionesComponent,
    
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioHeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
