import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent implements OnInit {

  constructor(private router: Router) { }

  err: string ="";

  ngOnInit() {
  }

  buscarHeroes(textoBusqueda: string){
    if (textoBusqueda != "") {
      console.log("Texto ingresado: "+textoBusqueda)
      this.err = "";
      this.router.navigate(['/buscar',textoBusqueda]);
    } else {
      this.err = "Ingrese un término de busqueda valido";
    }
  }

}
