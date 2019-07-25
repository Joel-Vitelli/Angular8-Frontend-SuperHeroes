import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaHeroesComponent } from "./components/lista-heroes/lista-heroes.component";
import { DetalleHeroeComponent } from "./components/detalle-heroe/detalle-heroe.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";

const routes: Routes = [
  { path: 'heroes', component : ListaHeroesComponent },
  { path: 'detalle/:nombre', component: DetalleHeroeComponent },
  { path: 'buscar/:termino', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
