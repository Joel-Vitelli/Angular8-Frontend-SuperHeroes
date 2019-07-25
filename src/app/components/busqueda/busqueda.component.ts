import { Component, OnInit } from '@angular/core';
import { ServicioHeroesService } from "../../service/servicio-heroes.service";
import { Heroe } from "../../interfaces/heroe.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private activatedRouter: ActivatedRoute, private herService: ServicioHeroesService) { 
    this.activatedRouter.params.subscribe(params =>{
      this.heroes = this.herService.getHeroesXNombreBiografiaPoderes(params['termino']);
    })
  }

  ngOnInit() {
  }

}
