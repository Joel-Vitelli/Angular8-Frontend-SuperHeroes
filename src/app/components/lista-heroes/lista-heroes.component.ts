import { Component, OnInit } from '@angular/core';
import { Heroe } from "../../interfaces/heroe.interface";
import { ServicioHeroesService } from "../../service/servicio-heroes.service";

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {  

  heroes: Heroe[] = [];

  constructor(private herService: ServicioHeroesService) { 
    this.herService.getHeroesDeArchivo().subscribe(herArchivo => {
      this.heroes = herArchivo;
    })
  }

  ngOnInit() {
  }

}
